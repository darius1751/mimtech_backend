import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Loan } from "./loan.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true, type: 'text' })
    public name: string;

    @Column({ type: 'text', unique: true })
    public email: string;

    @Column({ type: 'text' })
    public password: string;

    @Column({ type: "timestamp", default: new Date().toJSON(), update: false })
    public createdAt: string;

    @Column({ type: 'timestamp', default: null, nullable: true })
    public updatedAt: string;

    @OneToMany(() => Loan, (loan) => loan.user, { nullable: false })
    public readonly loan: Loan[];

}