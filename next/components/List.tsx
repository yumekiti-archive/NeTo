import { Stack } from '@chakra-ui/react'
import Item from './Item';

type Props = {
  todos: any
};

export default function List({ todos }: Props){
  return (
    <Stack spacing={3}>
      {
        todos.map((todo: any, index: Number) => {
          return (
            <Item text={todo.title} />
          )
        })
      }
    </Stack>
  );
}