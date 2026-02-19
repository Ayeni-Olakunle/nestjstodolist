import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column({ default: 'false' })
    isCompleted: string;

    @Column()
    userId: number;
}