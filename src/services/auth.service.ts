import { Repository } from "typeorm";
import { User } from "../models/user.entity";
import { AppDataSource } from '../connection/connection.config';
import { CreateUserDAO } from "../models/dao/create/create-user.dao";
import { hash, compare } from 'bcrypt';
import { LoginUserDao } from "../models/dao/login/login-user.dao";
import { sign } from 'jsonwebtoken';

export class AuthService {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async register(createUserDao: CreateUserDAO) {
        try {
            const { password } = createUserDao;
            createUserDao.password = await hash(password, 10);
            const user = await this.userRepository.save(createUserDao);
            return { ...user, password: undefined };
        } catch (error) {
            throw { error };
        }
    }

    async login({ email, password }: LoginUserDao) {
        try {
            const user = await this.userRepository.findOneByOrFail({ email });
            const { password: passwordUser } = user;
            if (await compare(password, passwordUser)) {
                const token = sign({
                    id: user.id,
                    secure: true,
                    signature: process.env.SIGNATURE_JWT
                }, process.env.SECRET_JWT || "", { expiresIn: '2h' });
                return { ...user, password: undefined, token };
            }
        } catch (error) {
            throw { error };
        }
    }
}