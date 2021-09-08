import { Task } from 'src/tasks/tasks.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tags.entity';

@Entity('tagTask')
@Index(['tagID', 'taskID'], { unique: true })
export class TagTask {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tagID!: number;

  @Column()
  taskID!: number;

  @ManyToOne(() => Tag, (tag) => tag.tagTask)
  @JoinColumn({ name: 'tagID' })
  tag!: Tag;

  @ManyToOne(() => Task, (task) => task.tagTask)
  @JoinColumn({ name: 'taskID' })
  task!: Task;

  constructor(tagID: number, taskID: number) {
    this.tagID = tagID;
    this.taskID = taskID;
  }
}
