import { Flex, Button, Input } from '@chakra-ui/react'
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

type Props = {
  todos: any;
  setTodo: Function;
};

export default function Form({ todos, setTodo }: Props){
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

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <p>Error! ${error.message}</p>
  );

  return (
    <Flex justify="center" align='center'>
      <Input placeholder='todo' size='lg' onChange={e => setTitle(e.target.value)} />
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo().then((result) => {
            setTodo([...todos, result.data.addTodo]);
          });
          setTitle('');
        }}
      >
        <Button type="submit" colorScheme='blue'>Add</Button>
      </form>
    </Flex>
  );
}