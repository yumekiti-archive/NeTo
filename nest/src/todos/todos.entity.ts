import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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
}