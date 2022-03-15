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
//   addNewTodo(newTodoData: {
//     title: "牛乳を買ってくる",
//     body: "",
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