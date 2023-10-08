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
  Text
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';
import { Link as RRLink } from 'react-router-dom';

const spacing = [4, 6];

export const VendorServiceDetailPage = () => {
  const { id } = useParams() as { id: string };

  const { data: response } = useGetVendorServiceDetailsQuery({ id });
  const serviceDetails = response?.data[0];

  const { data: serviceResponse } = useGetVendorServicesQuery();
  const services = serviceResponse?.data || [];

  const route = useNavigate();

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
            <Flex flexDir='column' gap={2}>
              {Array.from({ length: 1 }, (_, i) => (
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
                      <Button
                        onClick={() => {
                          if (serviceDetails) {
                            route(
                              path.VENDOR_SERVICE_EDIT.replace(':id', serviceDetails.id.toString())
                            );
                          }
                        }}
                      >
                        Edit Service
                      </Button>
                    </HStack>
                  </Flex>
                  <Text>{serviceDetails?.description}</Text>
                  <Divider my={6} />
                </Box>
              ))}
            </Flex>
            <PanelHeader
              mx={[0, spacing[1]]}
              header='Services'
              mb={8}
              mt='56px'
              rightAction={
                <Link as={RRLink} color='#fff' to='#'>
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
                              as={RRLink}
                              color='black'
                              to={path.VENDOR_SERVICE_DETAIL.replace(':id', service.id.toString())}
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
                          as={RRLink}
                          color='#000'
                          textStyle='subtext'
                          to='#'
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
