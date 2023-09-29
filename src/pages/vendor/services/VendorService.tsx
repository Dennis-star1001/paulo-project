import { IconButton, PanelHeader } from '@/components';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';

export const VendorServicePage = () => {
  return (
    <Box bg='neutral.100' p={[4, '100px']}>
      <Flex
        flexDir={['column', 'row']}
        justifyContent='space-between'
        alignItems={['normal', 'end']}
      >
        <Stack>
          <Text as='h2' fontSize='36px'>
            Services
          </Text>
          <Flex display='inline-flex' gap={4}>
            <Input
              placeholder='Search for services'
              bgColor='#FFFFFF'
              textStyle='h1-subtext'
              fontWeight={600}
              color='gray.100'
            />
            <IconButton px='18px' icon={<RiSearch2Line />}>
              Search
            </IconButton>
          </Flex>
        </Stack>
        <HStack>
          <Button>Create Service</Button>
          <Button variant='outline'>Export to PDF</Button>
        </HStack>
      </Flex>
      <PanelHeader
        mt='88px'
        header='Recent Orders'
        rightAction={
          <Link color='white' href='#'>
            See all
          </Link>
        }
      />
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
        columnGap={[4, 7]}
        rowGap={[3, '30px']}
        mt={4}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <GridItem key={i}>
            <Link color='#000' textStyle='subtext' href='#' mt={3}>
              <Box bgColor='#fff' borderRadius='8px'>
                <Box borderRadius='8px 8px 0px 0px'>
                  <Image
                    objectFit='cover'
                    src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
                    h='197px'
                    w='344px'
                    alt='John Doe'
                  />
                </Box>
                <Stack p={2}>
                  <Flex justifyContent='space-between'>
                    <Stack spacing={0}>
                      <Text color='black' textDecor='none !important' textStyle='h1-subtext'>
                        Front End Developer
                      </Text>
                      <Text color='primary' textStyle='subtext'>
                        Available Slots: 7slots
                      </Text>
                    </Stack>
                    <Text textStyle='subtext-bold'>$1,000</Text>
                  </Flex>
                  <Flex justifyContent='space-between'>
                    <Text color='#000' textStyle='subtext' textDecor='none' mt={3}>
                      Oludare Abimbola Daniels
                    </Text>
                    <Stack spacing={0}>
                      <Text textAlign='center' textStyle='subtext-bold'>
                        Due date
                      </Text>
                      <Text textAlign='center' lineHeight='normal' textStyle='bold'>
                        16 Mar, 2023
                      </Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>

      <PanelHeader
        mt='47px'
        header='Recent Orders'
        rightAction={
          <Link color='white' href='#'>
            See all
          </Link>
        }
      />
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
        columnGap={[4, 7]}
        rowGap={[3, '30px']}
        mt={4}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <GridItem key={i}>
            <Link color='#000' textStyle='subtext' href='#' mt={3}>
              <Box bgColor='#fff' borderRadius='8px'>
                <Box borderRadius='8px 8px 0px 0px'>
                  <Image
                    objectFit='cover'
                    src='https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg'
                    h='197px'
                    w='344px'
                    alt='John Doe'
                  />
                </Box>
                <Stack p={2}>
                  <Flex justifyContent='space-between'>
                    <Stack spacing={0}>
                      <Text color='black' textDecor='none !important' textStyle='h1-subtext'>
                        Front End Developer
                      </Text>
                      <Text color='primary' textStyle='subtext'>
                        Available Slots: 7slots
                      </Text>
                    </Stack>
                    <Text textStyle='subtext-bold'>$1,000</Text>
                  </Flex>
                  <Flex justifyContent='space-between'>
                    <Text color='#000' textStyle='subtext' textDecor='none' mt={3}>
                      Oludare Abimbola Daniels
                    </Text>
                    <Stack spacing={0}>
                      <Text textAlign='center' textStyle='subtext-bold'>
                        Due date
                      </Text>
                      <Text textAlign='center' lineHeight='normal' textStyle='bold'>
                        16 Mar, 2023
                      </Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent='center' mt={['45px', '200px']}>
        <Button mx='auto' w={['full', '550px']}>
          Load more
        </Button>
      </Flex>
    </Box>
  );
};
