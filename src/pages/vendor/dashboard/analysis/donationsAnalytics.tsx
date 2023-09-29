import {
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  chakra,
  useMediaQuery
} from '@chakra-ui/react';

const DonationsAnalytics: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  return (
    <chakra.header id='header'>
      <Box>{isMobile ? <MobileView /> : isTablet ? <MobileView /> : <DesktopView />}</Box>
    </chakra.header>
  );
};

const DesktopView = () => {
  const activeOrders = [
    {
      clientName: ' Chinwe Adaeze',
      donation: ' Starting a business',
      date: 'Wednesday 12th, May 2032 | 6:00pm',
      amount: '$2,454'
    },
    {
      clientName: ' Chinwe Adaeze',
      donation: ' Fire destroyed house hold',
      date: 'Wednesday 12th, May 2032 | 6:00pm',
      amount: '$2,454'
    }
  ];
  return (
    <>
      <Flex flexDirection='row' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text fontFamily='Lato' fontWeight='600' fontSize={{ base: '12px', md: '16px' }}>
            Total Donations Received
          </Text>

          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '16px' }}
            color='#E9634B'
          >
            $25,642
          </Text>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            Donations created
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            40
          </Text>
        </Box>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            On-going donations{' '}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            10
          </Text>
        </Box>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            Total donors{' '}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            12
          </Text>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            Total Donation Period
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            144 DAYS
          </Text>
        </Box>
      </Flex>

      <Box mt='4' maxW='100%'>
        <Text fontSize='md' fontWeight='600' mb='2' color='#00B0F3'>
          RECENT DONATIONS
        </Text>
        <Table variant='simple' width='100%'>
          <Thead background='#4E4D4D1A' borderRadius='10px'>
            <Tr>
              <Th>Name of donor</Th>
              <Th>Amount</Th>
              <Th> Donation</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {activeOrders.map((order, index) => (
              <Tr key={index}>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '14px' }}
                  color='#201E1F'
                >
                  {order.clientName}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '12px' }}
                  color='#201E1F'
                >
                  {order.amount}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '12px' }}
                  color='#201E1F'
                >
                  {order.donation}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '14px' }}
                  color='#201E1F'
                  display='flex'
                  alignItems='center'
                  mt='2'
                >
                  {order.date}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

const MobileView = () => {
  const activeOrders = [
    {
      clientName: ' Chinwe Adaeze',
      donation: ' Starting a business',
      date: 'Wednesday 12th, May 2032 | 6:00pm',
      amount: '$2,454'
    },
    {
      clientName: ' Chinwe Adaeze',
      donation: ' Fire destroyed household',
      date: 'Wednesday 12th, May 2032 | 6:00pm',
      amount: '$2,454'
    }
  ];
  return (
    <Stack spacing={4}>
      <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Text fontFamily='Lato' fontWeight='600' fontSize={{ base: '12px', md: '16px' }}>
          Total Earnings
          <Text fontFamily='Lato' fontWeight='500' fontSize={{ base: '10px', md: '12px' }}>
            (excluding tax)
          </Text>
        </Text>
        <Text
          fontFamily='Lato'
          fontWeight='600'
          fontSize={{ base: '16px', md: '16px' }}
          color='#E9634B'
        >
          $25,642
        </Text>
      </Flex>
      <Flex flexDirection='row' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            Donations created
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            40
          </Text>
        </Box>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            On-going donations{' '}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            10
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection='row' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            Total donors{' '}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            12
          </Text>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            Total Donation Period
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            144 DAYS
          </Text>
        </Box>
      </Flex>

      <Text fontSize='md' fontWeight='600' mb='2' color='#00B0F3'>
        RECENT DONATIONS
      </Text>
      {activeOrders.map((order, index) => (
        <Flex
          borderWidth='1px'
          borderRadius='lg'
          p='4'
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          bg='white'
          key={index}
        >
          <Box>
            <Text
              fontFamily='Lato'
              fontWeight='600'
              fontSize={{ base: '12px', md: '14px' }}
              color='#201E1F'
            >
              {order.clientName}
            </Text>

            <Text
              fontFamily='Lato'
              fontWeight='600'
              fontSize={{ base: '12px', md: '12px' }}
              color='#201E1F'
            >
              {order.donation}
            </Text>
            <Flex
              fontFamily='Lato'
              fontWeight='600'
              fontSize={{ base: '12px', md: '14px' }}
              color='#201E1F'
              mt='2'
              alignItems='center'
            >
              <Text> {order.date}</Text>
            </Flex>
          </Box>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '12px' }}
            color='#201E1F'
          >
            {order.amount}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default DonationsAnalytics;
