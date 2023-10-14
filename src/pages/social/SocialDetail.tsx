import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { SocialButton } from './components';
import { FormInput, IconButton, Rating } from '@/components';
import { RiUser2Line } from 'react-icons/ri';
import { useState } from 'react';
import { ReactComponent as SendPlane } from '@/assets/send-plane.svg';

export const SocialDetailPage = () => {
  const [isFollowing, toggleFollow] = useState<boolean>(false);

  return (
    <Grid templateColumns='repeat(12, 1fr)' rowGap='22px' columnGap='26px' mt={3}>
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
        <Tabs mt={6} display={['block', 'none']}>
          <TabList>
            <Tab>Comments</Tab>
            <Tab>View Profile</Tab>
          </TabList>
        </Tabs>
        <Box mt={['38px', '100px']} mb='35px'>
          <FormInput
            borderColor='gray.100'
            borderRadius='38px'
            placeholder='Type your comment'
            rightAddon={
              <Box pos='absolute' right='0px' top='8px' pr={2}>
                <SendPlane />
              </Box>
            }
          />
        </Box>
        <Box as='section'>
          <Text as='h2' textStyle='h1' textTransform='uppercase' mb='15px'>
            Comments
          </Text>
          <Stack spacing='37px'>
            {Array.from({ length: 5 }, (_, i) => (
              <Card key={i}>
                <CardBody>
                  <Flex alignItems='center' gap={2}>
                    <Image
                      src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
                      h='25px'
                      w='25px'
                    />
                    <Text textStyle='body'>Orioferoluwa Peters</Text>
                  </Flex>
                  <Text fontWeight={400} mt={3} textStyle='body'>
                    Lorem ipsum dolor sit amet consectetur. Nec cras est mi in tempor et amet
                    tincidunt. Feugiat dictum commodo tellus amet arcu fames. Id elementum ut metus
                    donec orci habitant enim. Semper in amet ac velit. Quis mi velit aliquam
                    pharetra feugiat elit tincidunt odio. Odio aenean gravida ut accumsan faucibus
                    pellentesque massa tortor urna. Volutpat auctor risus mattis nullam porttitor
                    leo ultrices quisque. Convallis sed sit et etiam lobortis. Commodo sagittis at
                    arcu tellus eu turpis in
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Stack>
        </Box>
      </GridItem>
      <GridItem colSpan={[12, 5]}>
        <Box as='article' bg='#fff' py='42px' px={[4, '34px']}>
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
              <Text textStyle='body'>Seller Score</Text>
              <Text textAlign='center' textStyle='body'>
                4.5
              </Text>
            </Stack>
            <Stack>
              <Text color='primary' textAlign='center'>
                (20 Reviews)
              </Text>
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
