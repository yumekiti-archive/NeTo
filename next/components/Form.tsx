import { Flex, Button, Input } from '@chakra-ui/react'

export default function Form(){
  return (
    <Flex justify="center" align='center'>
      <Input placeholder='todo' size='lg' />
      <Button colorScheme='blue'>Add</Button>
    </Flex>
  );
}