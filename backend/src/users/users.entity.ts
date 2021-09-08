// import { UserTask } from 'src/intermediateTables/userTask.entity';
import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  // @PrimaryGeneratedColumn()
  // id!: number;
  @PrimaryColumn()
  userID: string;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  password: string;

  // @OneToMany(() => UserTask, (userTask) => userTask.user)
  // userTask: UserTask[];

  constructor(name: string, bio: string, userID: string, password: string) {
    this.name = name;
    this.bio = bio;
    this.userID = userID;
    this.password = password;
    // userを作る時点では、そのuserはなにももっていない
    // this.userTask = [];
  }
}
