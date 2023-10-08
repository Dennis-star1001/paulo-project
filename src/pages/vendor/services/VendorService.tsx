import { useGetVendorServicesQuery } from '@/app/services/service';
import { IconButton, PanelHeader } from '@/components';
import { path } from '@/routes/path';
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
import { Link as RRLink } from 'react-router-dom';

export const VendorServicePage = () => {
  const { data: response } = useGetVendorServicesQuery();
  const services = response?.data || [];

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
          <Link as={RRLink} to={path.VENDOR_SERVICE_CREATE}>
            <Button>Create Service</Button>
          </Link>
          <Button variant='outline'>Export to PDF</Button>
        </HStack>
      </Flex>
      <PanelHeader
        mt='88px'
        header='Recent Services'
        rightAction={
          <Link as={RRLink} color='white' to='#'>
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
        {services.map((service) => (
          <GridItem key={service.id}>
            <Link
              as={RRLink}
              color='#000'
              textStyle='subtext'
              to={`${path.VENDOR_SERVICES}/${service.id.toString()}`}
              mt={3}
            >
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
                <Stack p={2}>
                  <Flex justifyContent='space-between'>
                    <Stack spacing={0}>
                      <Text color='black' textDecor='none !important' textStyle='h1-subtext'>
                        {service?.title || 'N/A'}
                      </Text>
                      <Text color='primary' textStyle='subtext'>
                        Available Slots: {service?.slot} slot{Number(service?.slot) > 1 && 's'}
                      </Text>
                    </Stack>
                    <Text textStyle='subtext-bold'>{`₦${service?.amount}` || 'N/A'}</Text>
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

      {services.length > 10 && (
        <Flex justifyContent='center' mt={['45px', '200px']}>
          <Button mx='auto' w={['full', '550px']}>
            Load more
          </Button>
        </Flex>
      )}
    </Box>
  );
};
