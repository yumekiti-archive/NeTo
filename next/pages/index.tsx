import type { NextPage } from 'next'
import { SimpleGrid, Container, Input, Flex, Button } from '@chakra-ui/react'
import List from '../components/List';

const Home: NextPage = () => {
  return (
    <>
      <Container p={10}>
        <SimpleGrid columns={1} spacing={10}>
          <Flex justify="center" align='center'>
            <Input placeholder='todo' size='lg' />
            <Button colorScheme='blue'>Add</Button>
          </Flex>

          <List />
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home
