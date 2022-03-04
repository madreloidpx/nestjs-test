import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    age: number;

    @Column
    height: number;

    @Column
    gender: number;

    @Column
    sales: number;

    @Column
    lastPurchaseDate: Date;
}