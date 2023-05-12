import { UserEntity } from './user.entity';
import {  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number

    @Column({
        type: "varchar",
        length: 150,
        unique: true
    })
    title: string

    @Column({
        type: "varchar",
        length: 4000,
    })
    body: string

    @ManyToOne(() => UserEntity,(user) => user.posts)
    @JoinColumn()
    author : UserEntity

}