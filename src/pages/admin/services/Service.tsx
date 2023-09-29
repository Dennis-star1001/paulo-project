import { IconButton } from '@/components';
import { Box, Button, Flex, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';

export const AdminServicePage = () => {
  return (
    <Box bg='neutral.100' p='100px'>
      <Flex>
        <Stack>
          <Text as='h2'>Services</Text>
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
          <Button>Create Service</Button>
        </HStack>
      </Flex>
    </Box>
  );
};
