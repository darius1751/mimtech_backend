import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Loan } from "./loan.entity";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: 'text' })
    public readonly title: string;

    @Column({ type: 'text' })
    public readonly author: string;

    @Column({ type: 'int' })
    public readonly publicationYear: number;

    @Column({ type: "timestamp", default: new Date().toJSON() })
    public readonly createdAt: string;

    @Column({ type: 'timestamp', default: null, nullable: true })
    public readonly updatedAt: string;

    @OneToMany(() => Loan, (loan)=> loan.book)
    public readonly loan: Loan;
}