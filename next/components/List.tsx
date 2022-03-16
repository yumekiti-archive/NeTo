import { Stack, Box } from '@chakra-ui/react'

export default function List(){
  return (
    <Stack spacing={3}>
      <Box p={5} shadow='md' borderWidth='1px'>
        This is the Box
      </Box>
      
      <Box p={5} shadow='md' borderWidth='1px'>
        This is the Box
      </Box>
    </Stack>
  );
}