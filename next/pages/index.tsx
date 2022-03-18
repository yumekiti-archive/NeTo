import type { NextPage } from 'next'
import { SimpleGrid, Container } from '@chakra-ui/react'
import List from '../components/List';
import Form from '../components/Form';

const Home: NextPage = () => {
  const todos = [
    {title: "hoge"},
    {title: "piyo"}
  ]
  return (
    <>
      <Container p={10}>
        <SimpleGrid columns={1} spacing={10}>
          <Form />
          <List todos={todos}/>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home
