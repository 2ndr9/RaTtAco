import { UserTask } from 'src/intermediateTables/userTask.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  userTask: UserTask[];

  constructor(name: string, bio: string, email: string, password: string) {
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.password = password;
    // userを作る時点では、そのuserはなにももっていない
    this.userTask = [];
  }
}
