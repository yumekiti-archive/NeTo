import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  public async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoRepository.find({});

    if (!todos) throw new NotFoundException();

    return todos;
  }
}
