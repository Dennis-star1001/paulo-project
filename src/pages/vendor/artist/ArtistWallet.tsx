import AfterLoginHeader from '../../../components/Header/AfterLoginHeader';
import {
  Container,
  Text,
  Flex,
  Box,
  HStack,
  VStack,
  Stack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

const ArtistWallet = () => {
  return (
    <>
      <AfterLoginHeader />

      <Box bg='neutral.100' p={[4, '100px']}>
        <Container maxW='1000px' p='0'>
          <Flex
            justifyContent='space-between'
            my='20px'
            alignItems='center'
            gap='20px'
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box>
              <Text as='h3'>
                Wallet Balance:{' '}
                <Text as='span' color='primary'>
                  $256.50
                </Text>
              </Text>
            </Box>
            <HStack>
              <Button variant='solid' fontWeight='300' colorScheme='linkedin'>
                Withdraw to Bank
              </Button>
              <Button variant='solid' fontWeight='300' colorScheme='red'>
                Export tax filling/returns
              </Button>
            </HStack>
          </Flex>

          <Tabs mt='40px'>
            <TabList>
              <Tab>Artist Wallet History</Tab>
              <Tab>Artist Wallet Transfer</Tab>
            </TabList>

            <TabPanels>
              <TabPanel mt='30px' p='0'>
                <Stack spacing={5}>
                  <Box>
                    <Text as='b'>Today</Text>
                    <Stack mt='20px' spacing={5}>
                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='green.500'
                              borderRadius='50%'
                            >
                              <ArrowUpIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                Payment received from{' '}
                                <Text as='span' color='primary'>
                                  Adedoyin Dolapo
                                </Text>
                              </Text>
                              <Text as='p' color='primary'>
                                2 Minutes Track
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>

                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='green.500'
                              borderRadius='50%'
                            >
                              <ArrowUpIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                Payment received from{' '}
                                <Text as='span' color='primary'>
                                  Adedoyin Dolapo
                                </Text>
                              </Text>
                              <Text as='p' color='primary'>
                                2 Minutes Track
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>

                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='green.500'
                              borderRadius='50%'
                            >
                              <ArrowUpIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                Payment received from{' '}
                                <Text as='span' color='primary'>
                                  Adedoyin Dolapo
                                </Text>
                              </Text>
                              <Text as='p' color='primary'>
                                2 Minutes Track
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>
                    </Stack>
                  </Box>

                  <Box>
                    <Text as='b'>Today</Text>
                    <Stack mt='20px' spacing={5}>
                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='green.500'
                              borderRadius='50%'
                            >
                              <ArrowUpIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                Payment received from{' '}
                                <Text as='span' color='primary'>
                                  Adedoyin Dolapo
                                </Text>
                              </Text>
                              <Text as='p' color='primary'>
                                2 Minutes Track
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </TabPanel>

              <TabPanel mt='30px' p='0'>
                <Stack spacing={5}>
                  <Box>
                    <Text as='b'>Today</Text>
                    <Stack mt='20px' spacing={5}>
                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='red.500'
                              borderRadius='50%'
                            >
                              <ArrowDownIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                $2000 was withdrawn to your account
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>

                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='red.500'
                              borderRadius='50%'
                            >
                              <ArrowDownIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                $2000 was withdrawn to your account
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>

                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='red.500'
                              borderRadius='50%'
                            >
                              <ArrowDownIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                $2000 was withdrawn to your account
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>
                    </Stack>
                  </Box>

                  <Box>
                    <Text as='b'>Today</Text>
                    <Stack mt='20px' spacing={5}>
                      <Box p='15px' bg='white'>
                        <Flex alignItems='center' justifyContent='space-between'>
                          <HStack spacing={3}>
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              as='div'
                              w='40px'
                              h='40px'
                              bg='red.500'
                              borderRadius='50%'
                            >
                              <ArrowDownIcon color='white' fontSize='1.5rem' />
                            </Flex>

                            <VStack alignItems='flex-start' spacing={1}>
                              <Text color='gray' as='p'>
                                $2000 was withdrawn to your account{' '}
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack spacing={1} alignItems='flex-end'>
                            <Text fontSize='0.8rem' color='gray.400'>
                              2:00pm
                            </Text>
                            <Text as='b'>$1,362</Text>
                          </VStack>
                        </Flex>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};

export default ArtistWallet;
