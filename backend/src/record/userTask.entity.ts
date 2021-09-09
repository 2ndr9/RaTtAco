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

  @Column({ type: 'bigint' })
  // 世界協定時からの経過ミリ秒
  // DateをgetTime()したもの
  startTime: number;

  @Column({ type: 'bigint' })
  // 世界協定時からの経過ミリ秒
  // DateをgetTime()したもの
  endTime: number;

  @Column({ type: 'bigint' })
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
    startTime: number,
    endTime: number,
    duration: number,
  ) {
    this.userID = userID;
    this.taskID = taskID;
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = duration;
  }
}
