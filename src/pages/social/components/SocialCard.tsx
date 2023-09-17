import { ReactComponent as Bookmark } from '@/assets/archive-add.svg';
import { ReactComponent as Like } from '@/assets/like.svg';
import { ReactComponent as Comment } from '@/assets/message.svg';
import { ReactComponent as Share } from '@/assets/share.svg';
import { Box, Button, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

type SocialCardProps = {
  img: string;
  name: string;
  time: string;
  taggedName: string;
  comment: string;
  likes: number;
  numberOfComments: number;
  hasImg?: boolean;
};
export const SocialCard = ({
  comment,
  img,
  likes,
  name,
  numberOfComments,
  taggedName,
  time,
  hasImg
}: SocialCardProps) => {
  return (
    <Box borderRadius={1} bg='#fff' p={6}>
      <Flex alignItems='center'>
        <Image h='42px' w='42px' src={img} />
        <Stack spacing={0}>
          <Text textStyle='h1-subtext'>{name}</Text>
          <Text textStyle='caption'>{time}</Text>
        </Stack>
      </Flex>
      <Text color='primary' my='8px' textStyle='body-regular'>
        Tagged: {taggedName}
      </Text>
      <Text fontWeight={400} textStyle='body-regular' lineHeight='19px'>
        {comment}
      </Text>
      {hasImg && (
        <Carousel>
          <Image src={img} h='304px' w='full' />

          <Image src={img} h='304px' w='full' />
        </Carousel>
      )}
      <Flex mt={8} justifyContent='space-around'>
        <SocialButton type='like' count={likes} />
        <SocialButton type='comment' count={numberOfComments} />
        <SocialButton type='share' />
        <SocialButton type='bookmark' />
      </Flex>
    </Box>
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
        {IconComponent && <IconComponent />}
        <Text textStyle='caption'>{count}</Text>
      </HStack>
    </Button>
  );
};

type SocialType = 'bookmark' | 'share' | 'like' | 'comment';
const getSocialIcon = (type: SocialType) => {
  switch (type) {
    case 'bookmark':
      return Bookmark;
    case 'comment':
      return Comment;
    case 'like':
      return Like;
    case 'share':
      return Share;
    default:
      return null;
  }
};
