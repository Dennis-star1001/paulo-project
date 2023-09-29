import { Box, Text, Flex, Image, Button, Stack } from '@chakra-ui/react';
import DashboardHeader from '../Header/DashboardHeader';

import serviceIcon from '../../../../assets/service.svg';
import handMoney from '../../../../assets/money.svg';
import ticket from '../../../../assets/ticket-2 (2).svg';
import ServiceWallet from './ServiceWallet';

function Services() {
  return (
    <>
      <DashboardHeader />
      <Box bg="#E1EEF3" flex="1">
        <Box mx="auto" maxW="960px" p="10px">
          <Flex alignItems="center" flexDirection={{base:"column", md:"row"}} justifyContent="space-between" mb="5">
            <Text fontSize={{ base: '16px', md: 'inherit' }}>Wallet Balance: $256.50</Text>
            <Box display="flex" gap="3">
              <Button fontSize={{ base: '12px', md: '14px' }}>Withdraw to bank</Button>
              <Button bg="#E9634B" fontSize={{ base: '12px', md: '14px' }}>Export tax filings/ returns</Button>
            </Box>
          </Flex>

          <Stack
            spacing={5}
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'stretch' }}
          >
            <Box
              w={{ base: '100%', md: '300px' }}
              h={{ base: '100px', md: '150px' }}
              borderRadius="10"
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                marginX="5"
                borderRadius="10"
                paddingX="10px"
                h="100%"
                bg="#FFFFFF"
              >
                <Flex flexDirection="column">
                  <Text
                    fontFamily="Lato"
                    fontWeight="600"
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    Services Balance
                  </Text>
                  <Text
                    fontFamily="Lato"
                    fontWeight="600"
                    color="#00B0F3"
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    $1,234.45
                  </Text>
                </Flex>
                <Image src={serviceIcon} alt="ticket" w={{ base: '8', md: '12' }} />
              </Flex>
            </Box>

            <Box
              display={{ base: 'none', md: 'block' }}
              w={{ base: '100%', md: '300px' }}
              h={{ base: '100px', md: '150px' }}
              borderRadius="10"
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                marginX="5"
                borderRadius="10"
                paddingX="10px"
                h="100%"
                bg="#FFFFFF"
              >
                <Flex flexDirection="column">
                  <Text
                    fontFamily="Lato"
                    fontWeight="600"
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    Donation Balance
                  </Text>
                  <Text
                    fontFamily="Lato"
                    fontWeight="600"
                    color="#00B0F3"
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    $1,234.45
                  </Text>
                </Flex>
                <Image src={handMoney} alt="ticket" w={{ base: '8', md: '12' }} />
              </Flex>
            </Box>

            <Box
              display={{ base: 'none', md: 'block' }}
              w={{ base: '100%', md: '300px' }}
              h={{ base: '100px', md: '150px' }}
              borderRadius="10"
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                marginX="5"
                borderRadius="10"
                paddingX="10px"
                h="100%"
                bg="#FFFFFF"
              >
                <Flex flexDirection="column">
                  <Text
                    fontFamily="Lato"
                    fontWeight="600"
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    Event Balance
                  </Text>
                  <Text
                    fontFamily="Lato"
                    fontWeight="600"
                    color="#00B0F3"
                    fontSize={{ base: '12px', md: '14px' }}
                  >
                    $1,234.45
                  </Text>
                </Flex>
                <Image src={ticket} alt="ticket" w={{ base: '8', md: '12' }} />
              </Flex>
            </Box>
          </Stack>

          <ServiceWallet />
        </Box>
      </Box>
    </>
  );
}

export default Services;
