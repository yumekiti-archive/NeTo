import type { NextPage } from 'next'
import { Input, Flex, Button } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Flex m={10} justify="center" align='center'>
        <Input placeholder='todo' size='lg' />
        <Button colorScheme='blue'>Add</Button>
      </Flex>
    </>
  )
}

export default Home
