import { Box } from '@chakra-ui/react'

type Props = {
  text: String;
};

export default function Item({ text }: Props){
  return (
    <Box p={5} shadow='md' borderWidth='1px'>
      {text}
    </Box>
  );
}