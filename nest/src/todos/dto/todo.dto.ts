import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator"

@InputType()
export class NewTodo {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  body: string;

  @Field()
  @IsNotEmpty()
  isStatus: boolean;
}

// # Write your query or mutation here
// mutation {
//   addTodo(TodoData: {
//     title: "hoge",
//     body: "piyo fuga",
//     isStatus: false,
//   }) {
//     id
//     title
//     body
//     isStatus
//     createdAt
//     updatedAt
//   }
// }