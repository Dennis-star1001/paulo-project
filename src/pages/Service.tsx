import { FormInput, IconButton, PanelHeader } from '@/components';
import { Box, Center, Flex, Image, Link, Text } from '@chakra-ui/react';
import { RiFilter3Line, RiSearch2Line } from 'react-icons/ri';

const padding = [4, '200px'];
const ServicePage = () => {
  return (
    <>
      <Box bg='neutral.100' pb={4}>
        <Flex px={padding}>
          <IconButton display={['none', 'block']} icon={<RiFilter3Line />} />
          <FormInput />
          <IconButton icon={<RiSearch2Line />}>Search</IconButton>
        </Flex>
        <PanelHeader header='Highlights' mt={['30px', '90px']} />
        <Center h='304px' w='full' bg='gradient.100' mt={['30px', '42px']}>
          <Text color='#fff' fontSize='64px'>
            Banner Ad
          </Text>
        </Center>
        <PanelHeader
          mt={['46px', '80px']}
          px={[5, 0]}
          header={
            <Text as='h1' textTransform='uppercase' textStyle='h1'>
              Trending Services
            </Text>
          }
          rightAction={
            <Link as='h1' color='primary' textTransform='uppercase' href='#'>
              View all
            </Link>
          }
          bgColor='transparent'
          p={0}
        />

        <Flex gap={4} mt={10}>
          {Array.from({ length: 5 }, (_, i) => (
            <Box bgColor='#fff' p={4} w='fit-content' key={i}>
              <Image
                w='full'
                h='123px'
                src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
              />
              <Text fontSize='30px' fontWeight={400} textAlign='center'>
                Auto Care
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ServicePage;
