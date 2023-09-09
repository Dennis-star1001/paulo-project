// import Carousel from 'react-bootstrap/Carousel';
// import { mockApi } from './mockApi';
import { FormInput, IconButton } from '@/components';
import { PanelHeader } from '@/components/panel';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { RiFilter3Line, RiSearch2Line } from 'react-icons/ri';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const spacing = [4, 5];
const ServicePage = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Box bg='neutral.100' pb={4} pt='100px'>
      <Flex px={spacing} sx={{ svg: { fontSize: '20px' } }}>
        <IconButton display={['none', 'block']} icon={<RiFilter3Line />} />
        <FormInput bgColor='#fff' />
        <IconButton icon={<RiSearch2Line />}>Search</IconButton>
      </Flex>

      <PanelHeader mx={spacing} header='Highlights' mt={['30px', '90px']} />

      <Box mx={[0, spacing[1]]}>
        <Center h='fit-content' w='full' bg='gradient.100' mt={['30px', '42px']}>
          <Carousel>
            <Image
              src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
              h='304px'
              w='full'
            />

            <Image
              src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
              h='304px'
              w='full'
            />
          </Carousel>
        </Center>
      </Box>

      <PanelHeader
        mt={['46px', '80px']}
        mx={spacing}
        header={
          <Text as='h1' textTransform='uppercase' textStyle='h1'>
            Trending Services
          </Text>
        }
        rightAction={
          <Link as='h1' color='primary' textTransform='uppercase' href='#'>
            View all
          </Link>
        }
        bgColor='transparent'
        p={0}
      />

      <Flex gap={4} mt={10} mx={spacing} overflowX='auto'>
        {Array.from({ length: 5 }, (_, i) => (
          <Box bgColor='#fff' p={4} w='fit-content' key={i}>
            <Image
              w='full'
              h='123px'
              src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
            />
            <Text fontSize='30px' fontWeight={400} textAlign='center'>
              Auto Care
            </Text>
          </Box>
        ))}
      </Flex>

      <PanelHeader
        mx={spacing}
        header='Services'
        mb={8}
        mt='90px'
        rightAction={
          <Link as='h1' color='#fff' href='#'>
            See all
          </Link>
        }
      />
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
        columnGap={[4, 7]}
        rowGap={[3, '30px']}
        mx={spacing}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i}>
            <Box bgColor='#fff' borderRadius='8px' onClick={scrollToTop}>
              <Box borderRadius='8px 8px 0px 0px'>
                <Image
                  objectFit='cover'
                  src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
                  h='197px'
                  w='344px'
                  alt='John Doe'
                />
              </Box>
              <Stack p={4}>
                <Flex justifyContent='space-between'>
                  <Stack spacing={0}>
                    <Text textStyle='h1-subtext'>Front End Developer</Text>
                    <Text color='primary' textStyle='subtext'>
                      Available Slots: 7slots
                    </Text>
                  </Stack>
                  <Text textStyle='subtext-bold'>$1,000</Text>
                </Flex>
                <Link
                  color='#000'
                  textStyle='subtext'
                  href={`/TabbedService/${i}`}
                  textDecor='underline'
                  mt={3}
                >
                  Oludare Abimbola Daniels
                </Link>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent='center' mx={['44px', 0]} my={[10, '66px']}>
        <Button w='600px'>Load More</Button>
      </Flex>

      {/* my services */}
      <PanelHeader
        mx={spacing}
        header='My Services'
        mb={8}
        mt='90px'
        rightAction={
          <Link as='h1' color='#fff' href='#'>
            See all
          </Link>
        }
      />
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
        columnGap={[4, 7]}
        rowGap={[3, '30px']}
        mx={spacing}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i}>
            <Box bgColor='#fff' borderRadius='8px' onClick={scrollToTop}>
              <Box borderRadius='8px 8px 0px 0px'>
                <Image
                  objectFit='cover'
                  src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
                  h='197px'
                  w='344px'
                  alt='John Doe'
                />
              </Box>
              <Stack p={4}>
                <Flex justifyContent='space-between'>
                  <Stack spacing={0}>
                    <Text textStyle='h1-subtext'>Front End Developer</Text>
                    <Text color='primary' textStyle='subtext'>
                      Available Slots: 7slots
                    </Text>
                  </Stack>
                  <Text textStyle='subtext-bold'>$1,000</Text>
                </Flex>
                <Link
                  color='#000'
                  textStyle='subtext'
                  href={`/TabbedService/${i}`}
                  textDecor='underline'
                  mt={3}
                >
                  Oludare Abimbola Daniels
                </Link>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent='center' mx={['44px', 0]} my={[10, '66px']}>
        <Button w='600px'>Load More</Button>
      </Flex>
    </Box>
  );
};

export default ServicePage;
