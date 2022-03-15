import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator"

@InputType()
export class NewTodo {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  body: string;
}