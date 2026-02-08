import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Auth {;
    // Define your entity properties and methods here
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}