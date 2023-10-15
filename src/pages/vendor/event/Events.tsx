import { AiOutlineSearch } from 'react-icons/ai';
import { PanelHeader } from '@/components/panel';
import { CiLocationOn } from 'react-icons/ci';
import {
  Box,
  Text,
  Button,
  Input,
  Grid,
  Flex,
  Image,
  GridItem,
  InputGroup,
  InputLeftElement,
  HStack,
  VStack
} from '@chakra-ui/react';
import Breezy from '../../../assets/Breezey.png';
import DashboardHeader from '../dashboard/Header/DashboardHeader';

const padding = [4, '200px'];
const spacing = [4, 5];

const VendorEvents = () => {
  return (
    <>
      <DashboardHeader />

      <Box bg='#0D0D0D1A' px={padding}>
        
        <Flex
          justifyContent="space-between"
          alignItems={{base:"center", md:"flex-start"}}
          p='10'
          gap="15px"
          flexDirection={{base:"column-reverse", md:"row"}}
          px={spacing}
          sx={{ svg: { fontSize: '20px' } }}
        >

          <VStack alignItems="flex-start"> 
            <Box>
              <Text fontFamily='Lato' fontWeight='400' fontSize={{ base: '0', md: '26px' }}>
                Events
              </Text>
            </Box>
            <Box h='55px' display='flex' borderRadius='4px #0D0D0D1A '>
              <InputGroup maxW='200px'>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlineSearch fontSize='20' />
                </InputLeftElement>
                <Input placeholder='Search for events' bg='#FFFFFF' />
              </InputGroup>
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
            </Box>
          </VStack>

          <HStack spacing={3}>
          <Button>Create Event</Button>
          <Button>Export to PDF</Button>
        </HStack>

        </Flex>

        <Box m='2'>
          <PanelHeader
            mx={[0, spacing[1]]}
            header='UPCOMING EVENTS'
            mb={8}
            //   rightAction={
            //     <Link href='/events_near' color='#00B0F3'>
            //       <Text color='white'>See all</Text>
            //     </Link>
            //   }
          />
          <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
            columnGap={[4, 7]}
            rowGap={[3, '30px']}
            mx={[0, spacing[1]]}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <GridItem key={i}>
                <Image w='344px' h='197px' src={Breezy} />
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
            header='EVENTS'
            mb={8}
            //   rightAction={
            //     <Link href='/events_near' color='#00B0F3'>
            //       <Text color='white'>See all</Text>
            //     </Link>
            //   }
          />
          <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
            columnGap={[4, 7]}
            rowGap={[3, '30px']}
            mx={[0, spacing[1]]}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <GridItem key={i}>
                <Image w='344px' h='197px' src={Breezy} />
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

        <Flex justifyContent='center' mx={['44px', 0]} py={[10, '20px']}>
          <Button w='600px'>Load More</Button>
        </Flex>
      </Box>
    </>
  );
};

export default VendorEvents;
