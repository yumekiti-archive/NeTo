import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: '30'})
  title: string;

  @Column('text')
  body: string;

  @Column({ default: false })
  isActive: boolean;
}