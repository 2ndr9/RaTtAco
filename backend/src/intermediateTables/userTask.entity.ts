import { Task } from 'src/tasks/tasks.entity';
import { User } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('UserTask')
export class UserTask {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userID: number;

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

  constructor(userID: number, taskID: number) {
    this.userID = userID;
    this.taskID = taskID;
  }
}
