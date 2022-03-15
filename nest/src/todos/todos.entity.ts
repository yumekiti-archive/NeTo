import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Todo {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({length: '30'})
  title: string;

  @Field()
  @Column('text')
  body: string;

  @Field()
  @Column({ default: false })
  isStatus: boolean;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}