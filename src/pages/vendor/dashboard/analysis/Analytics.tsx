import { useState } from 'react';
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Button } from '@chakra-ui/react';
import DashboardHeader from '../Header/DashboardHeader';
import ServicesAnalytics from './servicesAnalytics';
import DonationsAnalytics from './donationsAnalytics';
import EventAnalytics from './eventAnalytics';

const Analytics = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <>
      <DashboardHeader />
      <Box bg='#E1EEF3' flex='1'>
        <Box mx='auto' maxW='960px' p='10px'>
          <Flex flexDirection='row' alignItems='center' mt='10' justifyContent='space-between'>
            <Text
              fontFamily='Lato'
              fontWeight='400'
              color='#00B0F3'
              fontSize={{ base: '20px', md: '34px' }}
            >
              Analytics
            </Text>
            <Button bg='#E9634B' fontSize={{ base: '12px', md: '14px' }}>
              Export tax filings/ returns
            </Button>
          </Flex>

          <Tabs
            colorScheme='#E9634B'
            color='black'
            size='lg'
            mt='10'
            borderRadius='10px'
            index={selectedTab}
            onChange={handleTabChange}
            background='white'
          >
            <TabList>
              <Tab>SERVICES</Tab>
              <Tab>DONATIONS</Tab>
              <Tab>EVENTS</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box p={4}>
                  <ServicesAnalytics />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={4}>
                  <DonationsAnalytics />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={4}>
                  <EventAnalytics />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Analytics;
