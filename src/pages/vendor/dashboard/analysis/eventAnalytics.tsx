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

const EventAnalytics: React.FC = () => {
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
      eventName: 'State music award',
      ticket: 'Regular: 300 Vip: 300VVip: 50',
      venue: 'Eko hotel and suites',
      date: '12th, May 2032 | 6:00pm',
      status: 'upcoming'
    },
    {
      eventName: 'State music award',
      ticket: 'free',
      venue: 'online',
      date: '17th Mar, 2034 | 7pm',
      status: 'event done'
    }
  ];

  return (
    <>
      <Box mt='4' maxW='100%'>
        <Text fontSize='md' fontWeight='600' mb='2' color='#00B0F3'>
          EVENT ANALYTICS
        </Text>
        <Table variant='simple' width='100%'>
          <Thead background='#4E4D4D1A' borderRadius='10px'>
            <Tr>
              <Th>Event Name</Th>
              <Th>Ticket</Th>
              <Th>Venue</Th>
              <Th>Date</Th>
              <Th>Status</Th>
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
                  {order.eventName}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '12px' }}
                  color='#201E1F'
                >
                  {order.ticket}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '12px' }}
                  color='#201E1F'
                >
                  {order.venue}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '12px' }}
                  color='#201E1F'
                >
                  {order.date}
                </Td>
                <Td width='fit-content' textAlign='center'>
                  <Box
                    p='1'
                    borderRadius='10'
                    bg={order.status === 'event done' ? 'green.200' : 'blue.200'}
                  >
                    <Text
                      fontFamily='Lato'
                      fontWeight='600'
                      fontSize={{ base: '12px', md: '12px' }}
                      color='#201E1F'
                    >
                      {order.status}
                    </Text>
                  </Box>
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
            Total Event
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            4
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
            Total Upcoming Event
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            1
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
            Total Event Attendees{' '}
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
            Air Time
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            12 Hrs
          </Text>
        </Box>
      </Flex>

      <Text fontSize='md' fontWeight='600' mb='2' color='#00B0F3'>
        RECENT DONATIONS
      </Text>
      {activeOrders.map((order, index) => (
        <Box
          key={index}
          borderWidth='1px'
          borderRadius='lg'
          p='4'
          display='flex'
          flexDirection='column'
          alignItems='stretch'
          bg='white'
        >
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            Name of donor: {order.clientName}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '12px' }}
            color='#201E1F'
          >
            Amount: {order.amount}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '12px' }}
            color='#201E1F'
          >
            Donation: {order.donation}
          </Text>
          <Flex
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
            mt='2'
            alignItems='center'
          >
            <Text>Date: {order.date}</Text>
          </Flex>
        </Box>
      ))}
    </Stack>
  );
};

export default EventAnalytics;
