import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client';
import { SimpleGrid, Container } from '@chakra-ui/react'
import List from '../components/List';
import Form from '../components/Form';

const Home: NextPage = () => {
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

  if (loading) return <text>Loading...</text>;
  if (error) return (
    <text>Error! ${error.message}</text>
  );

  return (
    <>
      <Container p={10}>
        <SimpleGrid columns={1} spacing={10}>
          <Form />
          <List todos={data.todos}/>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home