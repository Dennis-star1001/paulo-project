import { IconButton } from '@/components';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { RiHeart2Line, RiShoppingCartLine } from 'react-icons/ri';

const ProductPage = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap='34px' m={8}>
      <GridItem colSpan={8}>
        <Flex justifyContent='space-between'>
          <Stack spacing={3}>
            <Text color='primary' textStyle='h1'>
              Blue coast T-shirt
            </Text>
            <Text color='gray.400' textStyle='h1-subtext'>
              SKU:4245 - 5373
            </Text>
          </Stack>
          <Text textStyle='h1'>$12.43</Text>
        </Flex>
        <Flex minH='400px'>
          <Box></Box>
          <Box></Box>
        </Flex>
        <Divider my={2} />
        <Stack spacing={3}>
          <Text as='h3' color='#000' textStyle='h1'>
            Description
          </Text>
          <Text fontWeight={400} textStyle='body-regular'>
            Lorem ipsum dolor sit amet consectetur. Dignissim pretium semper hendrerit a ullamcorper
            ultrices pulvinar. Ornare viverra ut sollicitudin convallis viverra amet et tellus. Sed
            et pharetra diam ut lacinia feugiat. Feugiat et sed amet adipiscing quis viverra proin
            feugiat. Faucibus sem diam feugiat vestibulum ultrices id. Aliquam nunc ipsum aliquet
            iaculis quisque nec sit elit. Massa dolor fusce aenean pellentesque lobortis. In elit
            amet sem ullamcorper eget.
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack direction='row' spacing={3}>
          <IconButton icon={<RiHeart2Line />}>Save for later</IconButton>
          <IconButton icon={<RiShoppingCartLine />}>Add to cart</IconButton>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ProductPage;
