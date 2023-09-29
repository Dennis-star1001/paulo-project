
import { useState } from 'react';
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  Select, 
  useMediaQuery
} from '@chakra-ui/react';
import arrow from '../../../../assets/arrowUp.svg';
import arrowDown from '../../../../assets/arrowDown.svg';

interface Transaction {
  title: string;
  description: string;
  time: string;
  amount: string;
  isToday: boolean;
}

interface TabData {
  label: string;
  transactions: Transaction[];
}

const tabsData: TabData[] = [
  {
    label: 'Donation Wallet History',
    transactions: [
      {
        title: 'Payment received from Adedoyin Dolapo',
        description: '$200 donation for Help me abeg',
        time: '2:00pm',
        amount: '$1,362',
        isToday: true,
      },
    ],
  },
  {
    label: 'Donation Wallet Transfer',
    transactions: [
      {
        title: '$2,000 was withdrawn to your account',
        description: '',
        time: '2:00pm',
        amount: '-$2,000',
        isToday: false,
      },
    ],
  },
];

function DonationWallet() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Service');

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Box mt="30px">
      {isMobile && (
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          mb="2" 
        >
          <option value="Service">Service</option>
          <option value="Donation">Donation</option>
          <option value="Event">Event</option>
        </Select>
      )}
      <Tabs
        variant="enclosed"
        colorScheme="#201E1F"
        size="lg"
        index={selectedTab}
        onChange={handleTabChange}
      >
        <TabList bg="#EBE9E9">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              fontFamily="Lato"
              fontWeight="600"
              fontSize={{ base: '12px', md: '14px' }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabsData.map((tab, index) => (
            <TabPanel key={index}>
              <Box p={4}>
                {tab.transactions.map((transaction, transactionIndex) => (
                  <Flex
                    key={transactionIndex}
                    bg="#FFFF"
                    mt="2"
                    p="4"
                    flexDirection={{ base: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Flex alignItems="center" gap="2">
                      <Box>
                        <Image src={selectedTab === 0 ? arrow : arrowDown} w="50px" h="60px" />
                      </Box>
                      <Box>
                        <Text
                          fontFamily="Lato"
                          fontWeight="600"
                          fontSize={{ base: '12px', md: '14px' }}
                        >
                          {transaction.title}
                        </Text>
                        {transaction.description && (
                          <Text
                            fontFamily="Lato"
                            fontWeight="600"
                            fontSize={{ base: '12px', md: '14px' }}
                            color="#00B0F3"
                          >
                            {transaction.description}
                          </Text>
                        )}
                      </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'row', md: 'column' }} alignItems="center" gap="5">
                      <Text
                        fontFamily="Lato"
                        fontWeight="500"
                        fontSize={{ base: '10px', md: '12px' }}
                      >
                        {transaction.isToday ? 'Today' : '2 weeks ago'} at {transaction.time}
                      </Text>
                      <Text
                        fontFamily="Lato"
                        fontWeight="600"
                        fontSize={{ base: '12px', md: '14px' }}
                      >
                        {transaction.amount}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default DonationWallet;
