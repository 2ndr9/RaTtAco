import { Task } from 'src/tasks/tasks.entity';
import { User } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';

@Entity('UserTask')
export class UserTask {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  duration: number;

  @Column()
  userID: string;

  @Column()
  taskID: number;

  @ManyToOne(() => User, (user) => user.userTask)
  @JoinColumn({ name: 'userID' })
  // !でいいのか？
  user!: User;

  @ManyToOne(() => Task, (task) => task.userTask)
  @JoinColumn({ name: 'taskID' })
  // !でいいのか？
  task!: Task;

  constructor(
    userID: string,
    taskID: number,
    startTime: Date,
    endTime: Date,
    duration: number,
  ) {
    this.userID = userID;
    this.taskID = taskID;
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = duration;
  }
}
