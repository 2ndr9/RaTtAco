import { UserTask } from 'src/intermediateTables/userTask.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  isPrivate: boolean;

  @Column()
  description: string;

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTask: UserTask[];

  constructor(name: string, description: string, isPrivate: boolean) {
    this.name = name;
    this.description = description;
    this.isPrivate = isPrivate;
    this.userTask=
  }
}
