import { Box, Flex, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { SocialButton } from './components';
import { IconButton, Rating } from '@/components';
import { RiUser2Line } from 'react-icons/ri';
import { useState } from 'react';

export const SocialDetailPage = () => {
  const [isFollowing, toggleFollow] = useState<boolean>(false);

  return (
    <Grid templateColumns='repeat(12, 1fr)' rowGap='22px' columnGap='26px'>
      <GridItem colSpan={[12, 7]}>
        <Flex alignItems='center' gap='18px'>
          <Image
            h='50px'
            w='50px'
            src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
          />
          <Stack spacing={0}>
            <Text textStyle='body-regular'>Orioferoluwa Peters</Text>
            <Text textStyle='caption'>2hrs</Text>
          </Stack>
        </Flex>
        <Text color='primary' textStyle='body' lineHeight='normal' my={3}>
          Tagged: Orioferoliwa Peters
        </Text>
        <Text color='gray.400' fontWeight={400} textStyle='body'>
          Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac
          adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat
          sed augue. Tempor commodo risus lacus nec purus dictum dolor.
        </Text>
        <Carousel>
          {Array.from({ length: 2 }, (_, i) => (
            <Image
              key={i}
              src='https://image.khaleejtimes.com/?uuid=e2d83b7a-f025-52ca-96de-f37200b870e7&function=fit&type=preview&source=false&q=75&maxsize=1500&scaleup=0'
              h='304px'
              w='full'
              objectFit='cover'
            />
          ))}
        </Carousel>
        <Flex mt={8} justifyContent='space-around'>
          <SocialButton type='like' count={16} />
          <SocialButton type='comment' count={9} />
          <SocialButton type='share' />
          <SocialButton type='bookmark' />
        </Flex>
      </GridItem>
      <GridItem colSpan={[12, 5]}>
        <Box bg='#fff' py='42px' px='34px'>
          <Flex alignItems='center' gap={8}>
            <Image
              h='100px'
              w='100px'
              src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
            />
            <Stack spacing={0}>
              <Text textStyle='body-regular' textTransform='uppercase'>
                Nicholas Adams
              </Text>
              <Text fontWeight={400} textStyle='body'>
                Vendor
              </Text>
            </Stack>
            <IconButton
              bgColor={isFollowing ? 'white' : 'primary'}
              color={isFollowing ? 'primary' : '#fff'}
              border='1px solid'
              borderColor={isFollowing ? 'primary' : '#fff'}
              icon={<RiUser2Line />}
              onClick={() => toggleFollow(!isFollowing)}
            >
              {`Follow${isFollowing ? 'ing' : ''}`}
            </IconButton>
          </Flex>
          <Text textStyle='body-regular'>Bio</Text>
          <Text color='gray.400' fontWeight={400} textStyle='body'>
            Lorem ipsum dolor sit amet consectetur. Nisi dolor magna sodales imperdiet velit proin
            quam. Id ac ac sed nulla sed lacinia elementum facilisis etiam. Pharetra lobortis amet
            pellentesque malesuada.
          </Text>
          <Flex gap='50px' mt={8}>
            <Stack>
              <Text>Seller Score</Text>
              <Text textAlign='center'>4.5</Text>
            </Stack>
            <Stack>
              <Text textAlign='center'>(20 Reviews)</Text>
              <Text>
                <Rating scale={5} strokeColor='grey' />
              </Text>
            </Stack>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};
