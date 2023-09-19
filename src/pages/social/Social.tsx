import { IconButton } from '@/components';
import { Box, Flex, Grid, GridItem, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import { RiAddCircleFill, RiSearchLine } from 'react-icons/ri';
import { SocialCard } from './components';
import { path } from '@/routes/path';

const socials = [
  {
    img: 'https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg',
    name: 'Mike John',
    time: '2hrs',
    taggedName: 'Orioferoliwa Peters',
    comment: `Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac
    adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat sed
    augue. Tempor commodo risus lacus nec purus dictum dolor.`,
    likes: 16,
    comments: 9,
    hasImg: true,
    numberOfComments: 10
  },
  {
    img: 'https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg',
    name: 'Mike John',
    time: '2hrs',
    taggedName: 'Orioferoliwa Peters',
    comment: `Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac
    adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat sed
    augue. Tempor commodo risus lacus nec purus dictum dolor.`,
    likes: 16,
    comments: 9,
    hasImg: false,
    numberOfComments: 10
  },
  {
    img: 'https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg',
    name: 'Mike John',
    time: '2hrs',
    taggedName: 'Orioferoliwa Peters',
    comment: `Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac
    adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat sed
    augue. Tempor commodo risus lacus nec purus dictum dolor.`,
    likes: 16,
    comments: 9,
    hasImg: true,
    numberOfComments: 10
  }
];

export const SocialPage = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' rowGap='22px' columnGap={[0, '36px']}>
      <GridItem colSpan={[12, 7]}>
        <Flex justifyContent='space-between' mb={6}>
          <Text as='h1' fontSize='40px' fontWeight={600}>
            Social
          </Text>
          <HStack>
            <RiSearchLine />
            <IconButton display={['none', 'block']} icon={<RiAddCircleFill />}>
              Create Post
            </IconButton>
          </HStack>
        </Flex>
        <Stack spacing={2}>
          {socials.map(
            ({ comment, img, likes, name, numberOfComments, taggedName, time, hasImg }, i) => (
              <SocialCard
                comment={comment}
                img={img}
                likes={likes}
                name={name}
                numberOfComments={numberOfComments}
                taggedName={taggedName}
                time={time}
                hasImg={hasImg}
                key={i}
              />
            )
          )}
        </Stack>
      </GridItem>
      <GridItem colSpan={[12, 5]}>
        <Box bg='#fff' borderRadius={2} p={6}>
          <Flex justifyContent='space-between'>
            <Text>Suggested People</Text>
            <Link href='#'>See All</Link>
          </Flex>
          <Stack as='section' mt={8} spacing={8}>
            {Array.from({ length: 5 }, (_, i) => (
              <Flex key={i} alignItems='start' justifyContent='space-between'>
                <Flex alignItems='center' gap='18px'>
                  <Image
                    h='50px'
                    w='50px'
                    src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
                  />
                  <Stack spacing={0}>
                    <Text textStyle='body-regular'>Orioferoluwa Peters</Text>
                    <Text textStyle='subtext'>Vendor~Akure, Ondo State</Text>
                  </Stack>
                </Flex>
                <Link href={path.SOCIAL_DETAIL.replace(':id', '3')} textStyle='body-regular'>
                  View Profile
                </Link>
              </Flex>
            ))}
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
};
