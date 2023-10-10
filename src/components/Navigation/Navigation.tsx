import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgSortAz } from 'react-icons/cg';

interface NavLinks {
  link: string;
  name: string;
}

const NavigationLinks: NavLinks[] = [
  { name: 'Services', link: '/services' },
  { name: 'Donations', link: '/donations' },
  { name: 'Events', link: '/events' },
  { name: 'Rewards', link: '/rewards' },
  { name: 'Airtime/Data', link: '/paycom' }
];

const Navigation = () => {
  return (
    <Box bg='#E9634B' fontFamily='Lato' color='#FFFFFF' h='150px'>
      <Flex w='100%' h='55px' gap='18px' py='8' px='4' justifyContent='center'>
        <Box w='48px' h='48px' mt='-1'>
          <CgSortAz fontSize='40' />
        </Box>
        <Text
          display={['none', 'block']}
          fontSize='24px'
          fontWeight='600'
          textTransform='uppercase'
          lineHeight='34.5px'
        >
          Browse category
        </Text>
        <Box w='100%' maxW='864px' h='55px' borderRadius='4px'>
          <InputGroup boxShadow='none'>
            <InputLeftElement pointerEvents='none'>
              <AiOutlineSearch fontSize='20' color='#4D4D4D' />
            </InputLeftElement>
            <Input
              placeholder='Search for products, events or services'
              bg='#FFFFFF'
              fontSize='16px'
              lineHeight='24px'
              fontWeight='600'
              color='#ADA8AB'
            />
            <InputRightElement width='auto'>
              <Button
                borderRadius='0 4px 4px 0'
                bg='#00B0F3'
                color='#4D4D4D'
                p='12px, 18px, 12px, 18px'
              >
                <Text
                  fontFamily='Open Sans'
                  fontWeight='400'
                  fontSize='14px'
                  lineHeight='33.5px'
                  align='center'
                  color='#F8FAFC'
                >
                  Search
                </Text>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
      <Center h='35px' justifyContent='center' my='6'>
        <Grid ml={[0, 20]} templateColumns='repeat(6, 1fr)' rowGap={2} columnGap={[6, '60px']}>
          {NavigationLinks.map((link, i) => (
            <GridItem key={i} colSpan={[2, 1]}>
              <Link href={link.link} key={`link_${i}`}>
                <Text
                  textAlign='center'
                  color='#fff'
                  textStyle={['body', 'h1']}
                  textTransform={['capitalize', 'uppercase']}
                >
                  {link.name}
                </Text>
              </Link>
            </GridItem>
          ))}
        </Grid>
        {/* <Stack direction='row' flexWrap='wrap' spacing={[6, '60px']}>
          {NavigationLinks.map((NavigationLink, i) => (
            <Link
              href={NavigationLink.link}
              key={`NavigationLink_${i}`}
              justifyContent='space-around'
            >
              <Text color='#fff' textStyle='h1' textTransform={['capitalize', 'uppercase']}>
                {NavigationLink.name}
              </Text>
            </Link>
          ))}
        </Stack> */}
      </Center>
    </Box>
  );
};

export default Navigation;
