import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Auth {;
    // Define your entity properties and methods here
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}