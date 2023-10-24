import { PanelHeader } from '@/components/panel';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgSortAz } from 'react-icons/cg';
import { useNavigate } from 'react-router';

interface EventLink {
  link: string;
  name: string;
}

const eventLinks: EventLink[] = [
  { name: 'Disaster ', link: '/Online_Events' },
  { name: 'Missionary ', link: '/free_events' },
  { name: 'Children', link: '/paid_events' },
  { name: 'Business ', link: '/upcoming_events' },
  { name: 'Emergency', link: '/events_near' },
  { name: 'Others', link: '/training' }
];

const padding = [4, '50px'];
const spacing = [4, 5];
const Donations = () => {
  const navigate = useNavigate();
  return (
    <Box bg='#0D0D0D1A' px={padding}>
      <Center display='flex' p='10' px={spacing} sx={{ svg: { fontSize: '20px' } }}>
        <Box w='55px' h='55px'>
          <IconButton
            aria-label='Search database'
            icon={<CgSortAz fontSize='30' color='black' />}
          />
        </Box>
        <Box w='864px' h='55px' borderRadius='4px #0D0D0D1A '>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <AiOutlineSearch fontSize='20' />
            </InputLeftElement>
            <Input placeholder='Search for events' bg='#FFFFFF' />
          </InputGroup>
        </Box>
        <Box w='103px' h='58px'>
          <Button borderRadius='5px'>
            <AiOutlineSearch fontSize='20' />
            <Text
              fontFamily='Open Sans'
              lineHeight='33.5px'
              fontSize='14px'
              fontWeight='400'
              alignItems='Center'
              ml='2'
            >
              search
            </Text>
          </Button>
        </Box>
      </Center>
      <Box mx={9} pb='3'>
        <Text
          color='#201E1F'
          fontFamily='Lato'
          lineHeight='34.5px'
          fontSize='24px'
          fontWeight='600'
          textTransform='uppercase'
        >
          Categories
        </Text>
      </Box>
      <Box   mb='10' mx='9'>
        <SimpleGrid w='4xl' columns={[2, 4, 6]} >
          {eventLinks.map((eventLink, i) => (
            <Link href={eventLink.link} key={`eventlink_${i}`} justifyContent='space-around'>
              <Box
                textTransform={'uppercase'}
                px='4'
                bg='#E1EEF3'
                display='inline-flex'
                borderRadius='4px'
                alignItems='center'
                color='#00B0F3'
                fontWeight='600'
                fontSize='15px'
                lineHeight='34.5px'
              >
                {eventLink.name}
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
      <Box mb='20' mx='4'>
        <PanelHeader
          fontSize={{ base: 'sm', md: 'auto' }}
          mx={[0, spacing[1]]}
          header='MY DONATIONS'
          mb={8}
          rightAction={
            <Link href='#' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          columnGap={[4, 7]}
          rowGap={[3, '30px']}
          mx={[0, spacing[1]]}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i}>
              <Image
                w='344px'
                h='197px'
                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <Box p='2' fontFamily='Open Sans' bgColor='#fff'>
                <Text fontWeight='600' fontSize='16' color='#201E1F' mt='2' mb='2'>
                  Help my life abeg
                </Text>
                <Text
                  fontWeight='normal'
                  fontSize='14'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt='2'
                  mb='2'
                >
                  Lorem ipsum dolor sit amet consectetur. Elementum bibendum suspendisse enim
                  convallis dolor interdum.
                </Text>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Text fontWeight={'bold'} fontSize={'sm'}>
                    $14,334 Donated{' '}
                  </Text>

                  <Button onClick={() => navigate('/donation-details')} bg='rgba(0, 176, 243, 1)'>
                    View Details
                  </Button>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mb='20' mx='4'>
        <PanelHeader
          mx={[0, spacing[1]]}
          header='Trending Donations'
          mb={8}
          rightAction={
            <Link href='#' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          columnGap={[4, 7]}
          rowGap={[3, '30px']}
          mx={[0, spacing[1]]}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i}>
              <Image
                w='344px'
                h='197px'
                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <Box p='2' fontFamily='Open Sans' bgColor='#fff'>
                <Text fontWeight='600' fontSize='16' color='#201E1F' mt='2' mb='2'>
                  Help my life abeg
                </Text>
                <Text
                  fontWeight='normal'
                  fontSize='14'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt='2'
                  mb='2'
                >
                  Lorem ipsum dolor sit amet consectetur. Elementum bibendum suspendisse enim
                  convallis dolor interdum.
                </Text>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Text fontWeight={'bold'} fontSize={'sm'}>
                    $14,334 Donated{' '}
                  </Text>
                  <Button onClick={() => navigate('/donation-details')} bg='rgba(0, 176, 243, 1)'>
                    View Details
                  </Button>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mb='20' mx='4'>
        <PanelHeader
          mx={[0, spacing[1]]}
          header='Donations'
          mb={8}
          rightAction={
            <Link href='#' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          columnGap={[4, 7]}
          rowGap={[3, '30px']}
          mx={[0, spacing[1]]}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <GridItem key={i}>
              <Image
                w='344px'
                h='197px'
                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <Box p='2' fontFamily='Open Sans' bgColor='#fff'>
                <Text fontWeight='600' fontSize='16' color='#201E1F' mt='2' mb='2'>
                  Help my life abeg
                </Text>
                <Text
                  fontWeight='normal'
                  fontSize='14'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt='2'
                  mb='2'
                >
                  Lorem ipsum dolor sit amet consectetur. Elementum bibendum suspendisse enim
                  convallis dolor interdum.
                </Text>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Text fontWeight={'bold'} fontSize={'sm'}>
                    $14,334 Donated{' '}
                  </Text>
                  <Button onClick={() => navigate('/donation-details')} bg='rgba(0, 176, 243, 1)'>
                    View Details
                  </Button>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Flex justifyContent='center' mx={['44px', 0]} my={[10, '66px']}>
        <Button w='600px'>Load More</Button>
      </Flex>
    </Box>
  );
};

export default Donations;
