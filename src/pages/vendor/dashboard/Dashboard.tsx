
import { Box, Text, Flex, Image, Button, Stack } from '@chakra-ui/react';
import DashboardHeader from './Header/DashboardHeader';
import walletBg from '../../../assets/Group.svg';
import wallet from '../../../assets/wallet.svg';
import analyticsBg from '../../../assets/analytics.svg';
import promotionBg from '../../../assets/promotionBg.svg';
import status from '../../../assets/status-up.svg';
import megaphone from '../../../assets/meagphone.svg';
import Features from './features';

const Dashboard = () => {
  const bgImageStyle = {
    backgroundImage: `url(${walletBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  const analyticsImageStyle = {
    backgroundImage: `url(${analyticsBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  const promotionImageStyle = {
    backgroundImage: `url(${promotionBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  return (
    <>
      <DashboardHeader />
      <Box mx="auto" maxW="960px" p="10px">
        <Flex alignItems="center" justifyContent="space-between" mb="5">
          <Text fontSize={{ base: '16px', md: 'inherit' }}>Wallet Balance: $256.50</Text>
          <Button>Create New</Button>
        </Flex>

        <Stack
          spacing={5}
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'stretch' }}
        >
          <Box
            style={bgImageStyle}
            w={{ base: '100%', md: '300px' }}
            h={{ base: '100px', md: '150px' }}
            borderRadius="10"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              marginX="5"
              flexDirection="row"
              h="100%"
            >
              <Text
                fontFamily="Lato"
                fontWeight="600"
                fontSize={{ base: '20px', md: '24px' }}
              >
                Wallet
              </Text>
              <Image src={wallet} alt="wallet" w={{ base: '8', md: '12' }} />
            </Flex>
          </Box>
          <Box
            style={analyticsImageStyle}
            w={{ base: '100%', md: '300px' }}
            h={{ base: '100px', md: '150px' }}
            borderRadius="10"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              marginX="5"
              flexDirection="row"
              h="100%"
            >
              <Text
                fontFamily="Lato"
                fontWeight="600"
                fontSize={{ base: '20px', md: '24px' }}
              >
                Analytics
              </Text>
              <Image src={status} alt="status" w={{ base: '8', md: '12' }} />
            </Flex>
          </Box>
          <Box
            style={promotionImageStyle}
            w={{ base: '100%', md: '300px' }}
            h={{ base: '100px', md: '150px' }}
            borderRadius="10"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              marginX="5"
              h="100%"
            >
              <Text
                fontFamily="Lato"
                fontWeight="600"
                fontSize={{ base: '20px', md: '24px' }}
              >
                Promotion
              </Text>
              <Image src={megaphone} alt="megaphone" w={{ base: '8', md: '12' }} />
            </Flex>
          </Box>
        </Stack>

        <Features />
      </Box>
    </>
  );
}

export default Dashboard;

