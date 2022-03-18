import { Stack } from '@chakra-ui/react'
import Item from './Item';

export default function List(){
  return (
    <Stack spacing={3}>
      <Item text="This is the Box" />
    </Stack>
  );
}