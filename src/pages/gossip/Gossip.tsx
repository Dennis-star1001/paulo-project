import { IconButton } from '@/components';
import { Flex, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react';
import { RiAddCircleFill, RiSearchLine } from 'react-icons/ri';
import { SocialCard } from '../social/components';

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

export const GossipPage = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' rowGap='22px' columnGap='36px'>
      <GridItem colSpan={[12, 7]}>
        <Flex justifyContent='space-between' mb={6}>
          <Text as='h1' fontSize='40px' fontWeight={600}>
            Gossip
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
    </Grid>
  );
};
