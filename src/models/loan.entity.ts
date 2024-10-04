import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Book } from "./book.entity";

@Entity()
export class Loan {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @ManyToOne(() => User, (user) => user.id, { nullable: false })
    public readonly user: User;

    @ManyToOne(() => Book, (book) => book.id, { nullable: false })
    public readonly book: Book;

    @Column({ type: 'timestamp' })
    public readonly loanDate: string;

    @Column({ type: 'timestamp', nullable: true, default: null })
    public readonly returnDate: string;
}