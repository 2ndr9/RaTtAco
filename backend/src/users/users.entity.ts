import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(name: string, bio: string, email: string, password: string) {
    this.name = name;
    this.bio = bio;
    this.email = email;
    // ハッシュ化したい〜
    this.password = password;
  }
}
