import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';
import { NewTodo } from './dto/todo.dto';

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => [Todo])
  public async todos(): Promise<Todo[]> {
    return await this.todosService.getAllTodos().catch((err) => {
      throw err;
    });
  }
  
  @Mutation(() => Todo)
  public async addTodo(
    @Args('TodoData') TodoData: NewTodo,
  ): Promise<Todo> {
    return await this.todosService.addTodo(TodoData).catch((err) => {
      throw err;
    });
  }
}
