import {
  Box,
  Text,
  Button,
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

const ServicesAnalytics: React.FC = () => {
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
      service: ' Videographer Service II: Motion design',
      orderDate: 'Wednesday 12th, May 2032 | 6:00pm',
      payment: '$2,454'
    },
    {
      clientName: 'Chinwe Adaeze',
      service: ' Videographer Service II: Motion design',
      orderDate: 'Wednesday 12th, May 2032 | 6:00pm',
      payment: '$2,454'
    }
  ];
  return (
    <>
      <Flex flexDirection='row' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text fontFamily='Lato' fontWeight='600' fontSize={{ base: '12px', md: '16px' }}>
            Total Earnings
          </Text>
          <Text fontFamily='Lato' fontWeight='500' fontSize={{ base: '10px', md: '12px' }}>
            (excluding tax)
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
            Total Services
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            103
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
            Rejected Services{' '}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            13
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
            On-going Services{' '}
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
            Available Services{' '}
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
            Available Slots{' '}
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
            Service duration
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
          Active Orders
        </Text>
        <Table variant='simple' width='100%'>
          <Thead background='#4E4D4D1A' borderRadius='10px'>
            <Tr>
              <Th>Client's Name</Th>
              <Th>Service</Th>
              <Th>Order Date</Th>
              <Th>Payment</Th>
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
                  {order.service}
                </Td>
                <Td
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '12px' }}
                  color='#201E1F'
                >
                  {order.orderDate}
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
                  <Text>{order.payment}</Text>
                  <Button
                    ml='2'
                    size='sm'
                    // variant="outline"
                    onClick={() => {
                      console.log('View Details clicked for order:', order);
                    }}
                  >
                    View Details
                  </Button>
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
      service: ' Videographer Service II: Motion design',
      orderDate: 'Wednesday 12th, May 2032 | 6:00pm',
      payment: '$2,454'
    },
    {
      clientName: 'Chinwe Adaeze',
      service: ' Videographer Service II: Motion design',
      orderDate: 'Wednesday 12th, May 2032 | 6:00pm',
      payment: '$2,454'
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
            Total Services
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            103
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
            Rejected Services{' '}
          </Text>
          <Text
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
          >
            13
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
            On-going Services{' '}
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
      <Flex justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Text
            fontFamily='Lato'
            fontWeight='500'
            fontSize={{ base: '12px', md: '14px' }}
            color='#4D4D4D'
          >
            {' '}
            Available Services{' '}
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
            Available Slots{' '}
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
            Service duration
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
        Active Orders
      </Text>
      {activeOrders.map((order, index) => (
        <Box
          key={index}
          borderWidth='1px'
          borderRadius='lg'
          p='4'
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          bg='white'
        >
          <Box display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
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
              {order.service}
            </Text>
            <Text
              fontFamily='Lato'
              fontWeight='600'
              fontSize={{ base: '12px', md: '12px' }}
              color='#201E1F'
            >
              {order.orderDate}
            </Text>
            <Button
              ml='2'
              size='sm'
              onClick={() => {
                console.log('View Details clicked for order:', order);
              }}
            >
              View Details
            </Button>
          </Box>
          <Flex
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '14px' }}
            color='#201E1F'
            mt='2'
            alignItems='center'
          >
            <Text> {order.payment}</Text>
          </Flex>
        </Box>
      ))}
    </Stack>
  );
};

export default ServicesAnalytics;
