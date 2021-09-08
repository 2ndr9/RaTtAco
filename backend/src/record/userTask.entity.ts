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
@Index(['userID', 'taskID'], { unique: true })
export class UserTask {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  startTime!: Date;

  @Column({ nullable: true })
  endTime!: Date;

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

  constructor(userID: string, taskID: number, startTime: Date) {
    this.userID = userID;
    this.taskID = taskID;
    this.startTime = startTime;
  }
}
