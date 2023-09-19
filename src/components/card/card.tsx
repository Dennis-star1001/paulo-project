import { Card, CardBody, CardFooter, Stack, Text, Image } from '@chakra-ui/react';
interface MyCardProps {
  imageUrl: string;
  autor: string;
  description: string;
  date: string;
}

export const MyCard = ({ imageUrl, autor, description, date }:MyCardProps) => {
  return (
    <Card maxW='448px'>
      <CardBody p='0'>
        <Image src={imageUrl} alt='gossip images' />
        <Stack mt='10px' spacing='1' mx='14px'>
          <Text size='14px' fontWeight={400}>
            {autor}
          </Text>
          <Text minH='142px' size='14px' fontWeight={400} lineHeight='20px'>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter p='0' mx='14px'>
        <Text color={'blue.600'}>{date}</Text>
      </CardFooter>
    </Card>
  );
};
