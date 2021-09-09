import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TagTask } from './tagTask.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name: string;

  @Column()
  yomi: string;

  @OneToMany(() => TagTask, (tagTask) => tagTask.tag)
  tagTask!: TagTask[];

  constructor(name: string, yomi: string) {
    this.name = name;
    this.yomi = yomi;
  }
}
