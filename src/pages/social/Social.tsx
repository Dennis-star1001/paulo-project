import { IconButton } from '@/components';
import { Box, Button, Flex, Grid, GridItem, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { BiComment } from 'react-icons/bi';
import { BsBookmarkPlus } from 'react-icons/bs';
import { PiShareFatThin, PiThumbsUpThin } from 'react-icons/pi';
import { RiAddCircleFill, RiSearchLine } from 'react-icons/ri';

export const SocialPage = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' rowGap='22px' columnGap='36px'>
      <GridItem colSpan={[12, 8]}>
        <Flex justifyContent='space-between'>
          <Text>Social</Text>
          <HStack>
            <RiSearchLine />
            <IconButton display={['none', 'block']} icon={<RiAddCircleFill />}>
              Create Post
            </IconButton>
          </HStack>
        </Flex>
        <Box bg='#fff'>
          <Flex alignItems='center'>
            <Image
              h='42px'
              w='42px'
              src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
            />
            <Stack spacing={0}>
              <Text>Mike John</Text>
              <Text>2hrs</Text>
            </Stack>
          </Flex>
          <Text>Tagged: Orioferoliwa Peters</Text>
          <Text>
            Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac
            adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat
            sed augue. Tempor commodo risus lacus nec purus dictum dolor.
          </Text>
          <Flex mt={8} justifyContent='space-around'>
            <SocialButton type='like' count={16} />
            <SocialButton type='comment' count={9} />
            <SocialButton type='share' />
            <SocialButton type='bookmark' />
          </Flex>
        </Box>
      </GridItem>
      <GridItem>fds</GridItem>
    </Grid>
  );
};

type SocialButtonProps =
  | {
      type: 'bookmark' | 'share';
      count?: never;
    }
  | {
      type: 'like' | 'comment';
      count: number;
    };
const SocialButton = ({ count, type }: SocialButtonProps) => {
  if (type === 'like' && count === undefined) {
    throw new Error('Count prop is required when type is "like"');
  }

  const IconComponent = getSocialIcon(type);

  return (
    <Button variant='unstyled'>
      <HStack spacing='2px' alignItems='center'>
        <Box fontSize='24px' as={IconComponent} />
        <Text>{count}</Text>
      </HStack>
    </Button>
  );
};

type SocialType = 'bookmark' | 'share' | 'like' | 'comment';
const getSocialIcon = (type: SocialType) => {
  switch (type) {
    case 'bookmark':
      return BsBookmarkPlus;
    case 'comment':
      return BiComment;
    case 'like':
      return PiThumbsUpThin;
    case 'share':
      return PiShareFatThin;
    default:
      return null;
  }
};
