import { IconButton } from '@/components';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { RiAddCircleFill, RiSearchLine } from 'react-icons/ri';
import { SocialCard } from '../social/components';
import GossipBanner from '@/assets/gossip-banner.png';
import { useState } from 'react';

type GossipMenu = {
  label: string;
  slug: 'trending-gist' | 'gossip';
  selected: boolean;
};

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
  const [gossipMenu, setGossipMenu] = useState<GossipMenu[]>([
    {
      label: 'Gossips',
      slug: 'gossip',
      selected: true
    },
    {
      label: 'Trending Gist',
      slug: 'trending-gist',
      selected: false
    }
  ]);

  const [isLargerThan1280] = useMediaQuery(`(min-width: 1280px)`);

  const selectedMenuItem = gossipMenu.find((item) => item.selected);

  const handleMenuItemClick = (slug: 'gossip' | 'trending-gist') => {
    setGossipMenu((prevSelectedMenu) =>
      prevSelectedMenu.map((item) => ({
        ...item,
        selected: item.slug === slug
      }))
    );
  };

  return (
    <Grid templateColumns='repeat(12, 1fr)' rowGap={0} columnGap={[0, '36px']}>
      <GridItem colSpan={[12, 7]}>
        <Flex justifyContent='space-between' mb={['9px', 6]}>
          {isLargerThan1280 ? (
            <Text as='h1' fontSize={['16px', '40px']} fontWeight={600}>
              Gossip
            </Text>
          ) : (
            <Menu>
              <MenuButton>{selectedMenuItem ? selectedMenuItem.label : 'No menu'}</MenuButton>
              <MenuList>
                {gossipMenu.map((item) => (
                  <MenuItem key={item.slug} onClick={() => handleMenuItemClick(item.slug)}>
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          )}
          <HStack>
            <RiSearchLine />
            <IconButton display={['none', 'block']} icon={<RiAddCircleFill />}>
              Create Post
            </IconButton>
          </HStack>
        </Flex>
        {(selectedMenuItem?.slug === 'gossip' || isLargerThan1280) && (
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
        )}
      </GridItem>
      {(selectedMenuItem?.slug === 'trending-gist' || isLargerThan1280) && (
        <GridItem colSpan={[12, 5]}>
          <Box>
            <Box bg={['transparent', '#fff']} borderRadius={1} px={[0, '21px']} py={[0, 6]}>
              {isLargerThan1280 && (
                <Text color='gray.400' fontWeight={600} mb='17px' textStyle='h1-subtext'>
                  Trending Gist
                </Text>
              )}
              <Stack spacing='56px'>
                {Array.from({ length: 3 }, (_, i) => (
                  <TrendingGist key={i} />
                ))}
              </Stack>
            </Box>
          </Box>
        </GridItem>
      )}
    </Grid>
  );
};

const TrendingGist = () => {
  return (
    <Box bgColor='neutral.100' pb={2}>
      <Image src={GossipBanner} />
      <Box px='14px' mt='10px' color='gray.400' fontWeight={400} textStyle='body'>
        <Text mb={1}>Posted By: Michael John</Text>
        <Text>
          Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac
          adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat
          sed augue. Tempor commodo risus lacus nec purus dictum dolor.
        </Text>
        <Text color='primary' mt={10}>
          Wed, Aug 24 2023 | 1:00pm GMT
        </Text>
      </Box>
    </Box>
  );
};
