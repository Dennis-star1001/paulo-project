import { IconButton } from '@/components';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Stack,
  Text as ChakraText,
  UnorderedList
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { RiHeart2Line, RiShoppingCartLine } from 'react-icons/ri';

const productDetails = [
  { label: 'Product Type', value: 'Others' },
  { label: 'Vendors', value: 'Adam' },
  { label: 'Tags', value: 'Fashion, Men' }
];
const ProductPage = () => {
  return (
    <Box bgColor='#F1F5F9' p={8}>
      <Grid templateColumns='repeat(12, 1fr)' gap='34px'>
        <GridItem colSpan={8}>
          <Flex justifyContent='space-between'>
            <Stack spacing={3}>
              <ChakraText color='primary' textStyle='h1'>
                Blue coast T-shirt
              </ChakraText>
              <ChakraText color='gray.400' textStyle='h1-subtext'>
                SKU:4245 - 5373
              </ChakraText>
            </Stack>
            <ChakraText textStyle='h1'>$12.43</ChakraText>
          </Flex>
          <Flex minH='400px'>
            <Box></Box>
            <Box></Box>
          </Flex>
          <Divider my={2} />
          <Stack spacing={3}>
            <ChakraText as='h3' color='#000' textStyle='h1'>
              Description
            </ChakraText>
            <Box fontWeight={400} textStyle='body-regular'>
              <ChakraText>
                Lorem ipsum dolor sit amet consectetur. Dignissim pretium semper hendrerit a
                ullamcorper ultrices pulvinar. Ornare viverra ut sollicitudin convallis viverra amet
                et tellus. Sed et pharetra diam ut lacinia feugiat. Feugiat et sed amet adipiscing
                quis viverra proin feugiat. Faucibus sem diam feugiat vestibulum ultrices id.
                Aliquam nunc ipsum aliquet iaculis quisque nec sit elit. Massa dolor fusce aenean
                pellentesque lobortis. In elit amet sem ullamcorper eget.
              </ChakraText>
              <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Container header='Reviews (60)'>reviews</Container>
        </GridItem>
        <GridItem colSpan={4}>
          <Stack direction='row' spacing={3}>
            <IconButton icon={<RiHeart2Line />}>Save for later</IconButton>
            <IconButton icon={<RiShoppingCartLine />}>Add to cart</IconButton>
          </Stack>
          <Container header='Product Details'>
            {productDetails.map((productDetail, i) => (
              <Box key={i}>
                <Flex justifyContent='space-between'>
                  <Text>{productDetail.label}</Text>
                  <ChakraText as='span' textStyle='body-regular'>
                    {productDetail.value}
                  </ChakraText>
                </Flex>
                {i !== productDetails.length - 1 && <Divider />}
              </Box>
            ))}
          </Container>
          <Container header='Product Variants'>
            <Flex justifyContent='space-between'>
              <Text>Sizes</Text>
              <Flex
                alignItems='center'
                justifyContent='center'
                bgColor='#E6F2F7'
                color='primary'
                h='29px'
                w='29px'
                textStyle='body-regular'
              >
                L
              </Flex>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>Colors</Text>
              <ChakraText as='span' textStyle='body-regular'>
                Black
              </ChakraText>
            </Flex>
          </Container>
          <Container header='Seller Details'>details</Container>
          <Container header='Delivery Information'>info</Container>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductPage;

interface ContainerProps {
  children: ReactNode;
  header?: ReactNode;
}
const Container = ({ children, header = 'Heading', ...rest }: ContainerProps) => {
  return (
    <Box
      bgColor='#fff'
      w='full'
      mt='21px'
      borderTop='5px solid'
      borderColor='primary'
      borderRadius='8px'
      px={7}
      py='36px'
      {...rest}
    >
      {typeof header === 'string' ? (
        <ChakraText as='h3' textStyle='h1'>
          {header}
        </ChakraText>
      ) : (
        <>{header}</>
      )}

      {children}
    </Box>
  );
};

const Text = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <ChakraText as='span' color='gray.400' textStyle='body-regular' fontWeight={400} {...rest}>
      {children}
    </ChakraText>
  );
};
