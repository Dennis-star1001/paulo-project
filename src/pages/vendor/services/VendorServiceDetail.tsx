import { useGetVendorServiceDetailsQuery, useGetVendorServicesQuery } from '@/app/services/service';
import Banner from '@/assets/dummy-banner.png';
import { PanelHeader, Rating } from '@/components';
import { path } from '@/routes/path';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';
import { useParams } from 'react-router';

const spacing = [4, 6];

export const VendorServiceDetailPage = () => {
  const { id } = useParams() as { id: string };

  const { data: response } = useGetVendorServiceDetailsQuery({ id });
  const serviceDetails = response?.data[0];

  const { data: serviceResponse } = useGetVendorServicesQuery();
  const services = serviceResponse?.data || [];

  return (
    <>
      <Box mt='98px' bg='neutral.100'>
        <Box mx={[4, 20]}>
          <Flex justifyContent='center'>
            <Image src={Banner} />
          </Flex>
          <Flex flexDir={['column', 'row']} justifyContent='space-between'>
            <Flex gap={[2, 10]} mt={['26px', 0]}>
              <Image
                src={serviceDetails?.image}
                h={['50px', '146px']}
                w={['50px', '146px']}
                pos={['static', 'relative']}
                top={[0, '-40px']}
              />
              <Stack mt={[0, 8]} spacing={0}>
                <Text textStyle={['body-regular', 'h1']}>John Doe</Text>
                <Text>
                  <Text as='span' color='primary' textStyle={['body-regular', 'h1-subtext']}>
                    Video Editor{' '}
                  </Text>
                  <Text as='span' color='gray.400' textStyle='subtext'>
                    Akure, Ondo
                  </Text>
                </Text>
              </Stack>
            </Flex>
            <Flex mt={[3, 8]} flexDir={['row', 'column']} alignItems='flex-start'>
              <Text color='primary' textStyle='body'>
                56 Reviews
              </Text>
              <Rating scale={5} strokeColor='grey' />
            </Flex>
          </Flex>
          <Box>
            <Box
              bgColor={['transparent', '#fff']}
              boxShadow={['none', 'px 2px 12px 0px rgba(0, 0, 0, 0.15)']}
              borderRadius='8px'
              pt='36px'
              px={[0, 6]}
            >
              <Text as='h2' textStyle='h1'>
                Alun Visuals Video editor
              </Text>
              <Divider my='10px' />
              <Tabs>
                <TabList
                  sx={{
                    '.chakra-tabs__tab': {
                      color: 'black',
                      textStyle: 'h1-subtext',
                      fontWeight: 400,
                      _selected: {
                        color: 'primary'
                      }
                    }
                  }}
                >
                  <Tab>Services Description</Tab>
                  <Tab>Available Services</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text>{serviceDetails?.description || ''}</Text>
                  </TabPanel>
                  <TabPanel>
                    <Flex flexDir='column'>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Box key={i}>
                          <Flex mb={4} justifyContent='space-between'>
                            <Stack>
                              <Text textStyle='h1-subtext' fontWeight={400}>
                                <Text as='span' fontWeight={600}>
                                  Service 1:
                                </Text>{' '}
                                Small description
                              </Text>
                              <Text color='primary' fontWeight={400} textStyle='h1-subtext'>
                                Available slots: 05
                              </Text>
                            </Stack>
                            <HStack spacing={4}>
                              <Text textStyle='h1-subtext'>$24.00</Text>
                              <Button>Book Services</Button>
                            </HStack>
                          </Flex>
                          <Text>
                            Elementum viverra sed in suspendisse id. Ut risus suscipit praesent
                            varius. Ornare pharetra magna pellentesque lacus. Sit lectus eget congue
                            ut ipsum a. Interdum enim quam morbi orci quam. Cursus at et sit elit.
                            Leo volutpat et duis pellentesque amet. Vitae viverra curabitur a nam.
                          </Text>
                          <Divider my={6} />
                        </Box>
                      ))}
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <PanelHeader
              mx={[0, spacing[1]]}
              header='Services'
              mb={8}
              mt='56px'
              rightAction={
                <Link as='h1' color='#fff' href='#'>
                  See all
                </Link>
              }
            />
            <Grid
              templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
              columnGap={[4, 7]}
              rowGap={[3, '30px']}
              mx={[0, spacing[1]]}
            >
              {services?.length > 0 ? (
                services.map((service) => (
                  <GridItem key={service.id}>
                    <Box bgColor='#fff' borderRadius='8px'>
                      <Box borderRadius='8px 8px 0px 0px'>
                        <Image
                          objectFit='cover'
                          src={service?.image}
                          h='197px'
                          w='344px'
                          alt={service?.title}
                        />
                      </Box>
                      <Stack p={4}>
                        <Flex justifyContent='space-between'>
                          <Stack spacing={0}>
                            <Link
                              color='black'
                              href={path.VENDOR_SERVICE_DETAIL.replace(
                                ':id',
                                service.id.toString()
                              )}
                              textStyle='h1-subtext'
                            >
                              {service?.title}i
                            </Link>
                            <Text color='primary' textStyle='subtext'>
                              Available Slots: 7slots
                            </Text>
                          </Stack>
                          <Text textStyle='subtext-bold'>$1,000</Text>
                        </Flex>
                        <Link
                          color='#000'
                          textStyle='subtext'
                          href='#'
                          textDecor='underline'
                          mt={3}
                        >
                          Oludare Abimbola Daniels
                        </Link>
                      </Stack>
                    </Box>
                  </GridItem>
                ))
              ) : (
                <Text>No record found</Text>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
