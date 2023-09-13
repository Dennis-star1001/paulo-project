import { CgSortAz } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { PanelHeader } from '@/components/panel';
import { CiLocationOn } from 'react-icons/ci';
import {
  Box,
  Text,
  Button,
  IconButton,
  Input,
  Center,
  Link,
  Grid,
  Flex,
  Image,
  GridItem,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';

interface EventLink {
  link: string;
  name: string;
}

const eventLinks: EventLink[] = [
  { name: 'ONLINE EVENTS', link: '/Online_Events' },
  { name: 'FREE EVENTS', link: '/free_events' },
  { name: 'PAID EVENTS', link: '/paid_events' },
  { name: 'UPCOMING EVENTS', link: '/upcoming_events' },
  { name: 'EVENTS NEAR YOU', link: '/events_near' },
  { name: 'TRAINING', link: '/training' },
  { name: 'SEMINARS', link: '/seminars' },
  { name: 'VLOGS', link: '/vlogs' },
  { name: 'FESTIVALS', link: '/festivals' },
  { name: 'OWANBE', link: '/owanbe' },
  { name: 'MUSIC & COMEDY', link: '/music&comedy' },
  { name: 'ARTS & CRAFTS', link: '/arts&crafts' }
];

const padding = [4, '200px'];
const spacing = [4, 5];

const EventPage = () => {
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
      <Box>
        <Text
          color='#201E1F'
          fontFamily='Lato'
          lineHeight='34.5px'
          fontSize='24px'
          fontWeight='600'
          textTransform='uppercase'
        >
          Treading Category
        </Text>
      </Box>
      <Box>
        {eventLinks.map((eventLink, i) => (
          <Link href={eventLink.link} key={`eventlink_${i}`} justifyContent='space-around'>
            <Box
              m='4'
              p='4'
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
      </Box>
      <Box m='4'>
        <PanelHeader
          mx={[0, spacing[1]]}
          header='EVENTS NEAR YOU'
          mb={8}
          rightAction={
            <Link href='/events_near' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
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
                <Box display='flex' alignItems='center'>
                  <Box mt='2' mr='2' color='#4D4D4D' w='20px' h='20px' borderRadius='50%'>
                    <CiLocationOn />
                  </Box>
                  <Text fontWeight='400' fontSize='14px' lineHeight='33.5px' color='#4D4D4D'>
                    Lagos, Nigeria
                  </Text>
                </Box>
                <Text
                  fontWeight='600'
                  fontSize='16px'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt='2'
                  mb='2'
                >
                  State Music Awards for minds in the music industry
                </Text>
                <Box>
                  <Text color='#00B0F3' lineHeight='33.5px' fontSize='14px' fontWeight='400'>
                    Wed, Aug 24 2023 | 1:00pm GMT
                  </Text>
                </Box>
                <Box color='#4D4D4D' lineHeight='24px' fontSize='12px' fontWeight='600'>
                  $1,000
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box m='4'>
        <PanelHeader
          mx={[0, spacing[1]]}
          header='ONLINE EVENTS'
          mb={8}
          rightAction={
            <Link href='/events_near' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
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
                <Box display='flex' alignItems='center'>
                  <Box mt='2' mr='2' color='#4D4D4D' w='20px' h='20px' borderRadius='50%'>
                    <CiLocationOn />
                  </Box>
                  <Text fontWeight='400' fontSize='14px' lineHeight='33.5px' color='#4D4D4D'>
                    Lagos, Nigeria
                  </Text>
                </Box>
                <Text
                  fontWeight='600'
                  fontSize='16px'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt='2'
                  mb='2'
                >
                  State Music Awards for minds in the music industry
                </Text>
                <Box>
                  <Text color='#00B0F3' lineHeight='33.5px' fontSize='14px' fontWeight='400'>
                    Wed, Aug 24 2023 | 1:00pm GMT
                  </Text>
                </Box>
                <Box color='#4D4D4D' lineHeight='24px' fontSize='12px' fontWeight='600'>
                  $1,000
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box m='4'>
        <PanelHeader
          mx={[0, spacing[1]]}
          header='TRENDING'
          mb={8}
          rightAction={
            <Link href='/events_near' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
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
                <Box display='flex' alignItems='center'>
                  <Box mt='2' mr='2' color='#4D4D4D' w='20px' h='20px' borderRadius='50%'>
                    <CiLocationOn />
                  </Box>
                  <Text fontWeight='400' fontSize='14px' lineHeight='33.5px' color='#4D4D4D'>
                    Lagos, Nigeria
                  </Text>
                </Box>
                <Text
                  fontWeight='600'
                  fontSize='16px'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt='2'
                  mb='2'
                >
                  State Music Awards for minds in the music industry
                </Text>
                <Box>
                  <Text color='#00B0F3' lineHeight='33.5px' fontSize='14px' fontWeight='400'>
                    Wed, Aug 24 2023 | 1:00pm GMT
                  </Text>
                </Box>
                <Box color='#4D4D4D' lineHeight='24px' fontSize='12px' fontWeight='600'>
                  $1,000
                </Box>
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

export default EventPage;
