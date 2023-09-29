import { Box, Image, Flex, Text, Link, Button, Grid, GridItem } from '@chakra-ui/react';
import { PanelHeader } from '@/components/panel';
import { PiShareFatLight } from 'react-icons/pi';
import { BiCalendar } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';

const EventDetails = () => {
  return (
    <Box bg='#0D0D0D1A' p={[2, 4, '200px']}>
      <Box p={[2, 4, 5]} pt={[2, 4, '10']} mt={[-4, -4, '-200']}>
        <Image
          w='100%'
          h={['auto', 'auto', '448px']}
          borderRadius='5px'
          src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
      </Box>
      <Flex
        flexDir={['column', 'column', 'row']}
        justifyContent={['center', 'center', 'space-between']}
      >
        <Box
          p={4}
          w={['100%', '100%', '80%']}
          borderRadius='8px'
          bg='#FFFFFF'
          boxShadow='#00000026'
          color='#201E1F'
          fontFamily='Lato'
          mb={4}
        >
          <Box display='flex' justifyContent='space-between'>
            <Text
              textTransform='uppercase'
              fontWeight='600'
              fontSize={['16px', '18px', '18px']}
              lineHeight={['28px', '34.5px', '34.5px']}
            >
              State Music Awards for minds in the music industry
            </Text>
            <Link href='#' p='1'>
              <PiShareFatLight fontSize={['24px', '30px', '30px']} color='#00B0F3' />
            </Link>
          </Box>
          <Text
            color='#00B0F3'
            lineHeight={['20px', '24.08px', '24.08px']}
            fontWeight='600'
            fontSize={['12px', '14px', '14px']}
            mt={2}
          >
            Available Tickets: 05
          </Text>
          <Box display='flex' borderBottom='#ADA8AB 1px solid' mt={2} alignItems='center' >
            <Box display='flex' alignItems='center' py={2}>
              <Box
                h='43px'
                w='43px'
                borderRadius='4px'
                bg='#E1EEF3'
                display='flex'
                alignItems='center'
                justifyContent='center'
                mr={2}
              >
                <BiCalendar color='#00B0F3' fontSize='25px' />
              </Box>
              <Text fontSize='14px' fontWeight='400'>
                Aug 6 - Aug 13, 2023 | 6:00pm GMT
              </Text>
            </Box>
            <Box display='flex' alignItems='center' py={2}>
              <Box
                h='43px'
                w='43px'
                borderRadius='4px'
                bg='#E1EEF3'
                display='flex'
                alignItems='center'
                justifyContent='center'
                mr={2}
              >
                <HiOutlineLocationMarker color='#00B0F3' fontSize='25px' />
              </Box>
              <Text fontSize='14px' fontWeight='400'>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Text>
            </Box>
            <Box display='flex' alignItems='center' mt={2}>
              <Button
                mr={2}
                lineHeight='17px'
                fontFamily='Inter'
                fontSize='14px'
                bg='#E1EEF3'
                color='#00B0F3'
                p={3}
                display={['none', 'none', 'flex']}
              >
                Regular- $15
                <RiArrowDropDownLine fontSize='20px' />
              </Button>
              <Button
                bg='#00B0F3'
                color='#FFFFFF'
                lineHeight='17px'
                fontFamily='Inter'
                fontSize='14px'
                p={3}
              >
                Buy
              </Button>
            </Box>
          </Box>
          <Box py={4}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita voluptatem
              quam eos ipsam, facere sint aliquid, fugit unde hic blanditiis totam similique
              cupiditate ratione placeat natus nam labore libero, enim delectus.
            </Text>
          </Box>
        </Box>
        <Box
          w={['100%', '100%', '20%']}
          borderRadius='8px'
          bg='#FFFFFF'
          boxShadow='#00000026'
          ml={[0, 0, 6]}
          p={4}
          color='#201E1F'
          fontFamily='Lato'
          mt={[4, 4, 0]}
        >
          <Text
            textTransform='uppercase'
            fontWeight='600'
            fontSize={['16px', '18px', '18px']}
            lineHeight={['28px', '34.5px', '34.5px']}
          >
            Event Host
          </Text>
          <Flex  display='flex' alignItems='center' gap={4}>
            <Box>
              <CgProfile fontSize='24px' />
            </Box>
            <Text
              color='#000000'
              fontSize='10px'
              textTransform='uppercase'
              fontWeight='600'
              fontFamily='Lato'
            >
              Nicholas Adams
            </Text>
          </Flex>
          <Box mt={2}>
            <Text>Seller Score: 4.5</Text>
          </Box>
        </Box>
      </Flex>
      <Box m={4}>
        <PanelHeader
          mx={[0, 5]}
          header='EVENTS NEAR YOU'
          mb={8}
          rightAction={
            <Link href='/events_near' color='#00B0F3'>
              <Text color='white'>See all</Text>
            </Link>
          }
        />
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          columnGap={[0, 4, 7]}
          rowGap={['10px', '30px']}
          mx={[0, 5]}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i}>
              <Image
                w='100%'
                h='auto'
                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />
              <Box p={2} fontFamily='Open Sans' bgColor='#fff'>
                <Flex alignItems='center'>
                  <Box mt={2} mr={2} color='#4D4D4D' w='20px' h='20px' borderRadius='50%'>
                    <CiLocationOn />
                  </Box>
                  <Text fontWeight='400' fontSize='14px' lineHeight='33.5px' color='#4D4D4D'>
                    Lagos, Nigeria
                  </Text>
                </Flex>
                <Text
                  fontWeight='600'
                  fontSize='16px'
                  lineHeight='24.08px'
                  color='#201E1F'
                  mt={2}
                  mb={2}
                >
                  State Music Awards for minds in the music industry
                </Text>
                <Text color='#00B0F3' lineHeight='33.5px' fontSize='14px' fontWeight='400'>
                  Wed, Aug 24, 2023 | 1:00pm GMT
                </Text>
                <Box color='#4D4D4D' lineHeight='24px' fontSize='12px' fontWeight='600'>
                  $1,000
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EventDetails;
