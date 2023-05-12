import { PostEntity } from './post.entity';
import { Column, Entity,  OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number

    @Column({
        type: "varchar",
        length: 150,
        unique: true
    })
    email: string

    @Column({
        type: "varchar",
        length: 150,
    })
    username: string

    @Column({
        type: "varchar",
    })
    password: string

    @OneToMany(() => PostEntity,(post) => post.author)
    posts : PostEntity[]
}