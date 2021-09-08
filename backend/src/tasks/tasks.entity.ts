import { UserTask } from 'src/record/userTask.entity';
import { TagTask } from 'src/tags/tagTask.entity';
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

  // creator

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTask!: UserTask[];

  @OneToMany(() => TagTask, (tagTask) => tagTask.task)
  tagTask!: TagTask[];

  constructor(name: string, description: string, isPrivate: boolean) {
    this.name = name;
    this.description = description;
    this.isPrivate = isPrivate;
  }
}
