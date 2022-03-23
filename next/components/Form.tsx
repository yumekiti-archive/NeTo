import { Flex, Button, Input } from '@chakra-ui/react'
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

export default function Form(){
  const [title, setTitle]  = useState("");
  
  const [addTodo, { data, loading, error }] = useMutation(gql`
    mutation {
      addTodo(TodoData: {
        title: "${title}",
        body: "",
        isStatus: false,
      }) {
        id
        title
        body
        isStatus
        createdAt
        updatedAt
      }
    }
  `);

  if (loading) return <text>Loading...</text>;
  if (error) return (
    <text>Error! ${error.message}</text>
  );

  return (
    <Flex justify="center" align='center'>
      <Input placeholder='todo' size='lg' onChange={e => setTitle(e.target.value)} />
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo();
          setTitle('');
        }}
      >
        <Button type="submit" colorScheme='blue'>Add</Button>
      </form>
    </Flex>
  );
}