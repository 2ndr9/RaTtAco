import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  isPrivate: boolean;

  @Column()
  description: string;

  constructor(name: string, description: string, isPrivate: boolean) {
    this.name = name;
    this.description = description;
    this.isPrivate = isPrivate;
  }
}
