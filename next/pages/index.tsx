import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client';
import { SimpleGrid, Container } from '@chakra-ui/react'
import List from '../components/List';
import Form from '../components/Form';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [todos, setTodo] = useState([]);

  const { loading, error, data } = useQuery(gql`
    query {
      todos {
        id
        title
        body
        isStatus
        createdAt
        updatedAt
      }
    }
  `);

  useEffect(() => {
    if(loading === false && data){
      setTodo(data.todos);
    }
  }, [loading, data])

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <p>Error! ${error.message}</p>
  );

  return (
    <>
      <Container p={10}>
        <SimpleGrid columns={1} spacing={10}>
          <Form todos={todos} setTodo={setTodo}/>
          <List todos={todos}/>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home