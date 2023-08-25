import Logo from '@/assets/logo.svg';
import { FormInput, FormLeftAddonInput, PasswordInput } from '@/components';
import {
  Button,
  Link as ChakraLink,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';

export const SignupModal = ({ isOpen = true, onClose = () => null }: UseDisclosureProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['sm', 'lg']}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>
          <Flex justifyContent='center'>
            <Image src={Logo} />
          </Flex>
          <Stack mt={3} spacing={2}>
            <Text textStyle='body'>Welcome to Cleaques</Text>
            <Text textStyle='body' fontWeight={400}>
              Connect with your diaspora
            </Text>
          </Stack>
        </ModalHeader>
        <ModalBody px={[0, '22px']}>
          <Tabs>
            <TabList>
              <Tab>Personal</Tab>
              <Tab>Vendor</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text textAlign='center'>Use Clerk here</Text>
                <Divider />

                <Stack spacing={4}>
                  <FormInput label='Email Address' placeholder='johndoe@email.com' />
                  <FormLeftAddonInput label='Phone number' addonText='+234' />
                  <PasswordInput placeholder='Password' />
                  <Stack spacing={2}>
                    <Checkbox>
                      <Text textStyle='body' fontWeight={400}>
                        Agree to Cleaques <ChakraLink href='#'>Terms and Conditions </ChakraLink>{' '}
                        and <ChakraLink href='#'>and Use of Privacy Policy</ChakraLink>
                      </Text>
                    </Checkbox>
                    <Text textStyle='subtext' ml={6}>
                      You consent to receive phone calls and SMS from Cleaques to provide updates on
                      your order and/or for msrketing purposes.
                    </Text>
                  </Stack>
                </Stack>
                <Flex justifyContent='center' mt='25px'>
                  <Stack spacing={4}>
                    <Button w={['full', '312px']}>Sign Up</Button>
                    <Text textAlign='center' textStyle='body-regular' fontWeight={400}>
                      Already have an account?{' '}
                      <ChakraLink href='/login' textStyle='body'>
                        Login
                      </ChakraLink>
                    </Text>
                  </Stack>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Text textAlign='center'>Use Clerk here</Text>
                <Divider />
                <Grid templateColumns='repeat(2, 1fr)' rowGap={4} columnGap={5}>
                  <GridItem colSpan={2}>
                    <FormInput label='Company Name' placeholder='Cleaques Limited' />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormInput label='Email Address' placeholder='johndoe@email.com' />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <PasswordInput label='Password' />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormLeftAddonInput label='Phone number' addonText='+234' />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormInput label='Address' />
                  </GridItem>
                  <GridItem>
                    <FormInput label='Country' />
                  </GridItem>
                  <GridItem>
                    <FormInput label='State/Province' />
                  </GridItem>
                  <GridItem>
                    <FormInput label='City' />
                  </GridItem>
                  <GridItem>
                    <FormInput label='Zip code' />
                  </GridItem>
                  <GridItem>
                    <FormInput label='Date of birth' type='date-local' />
                  </GridItem>
                  <GridItem>
                    <FormInput label='Gender' />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormInput label='Referral Code (optional)' />
                  </GridItem>
                </Grid>
                <Divider />
                <Stack spacing={2}>
                  <Checkbox>
                    <Text textStyle='body' fontWeight={400}>
                      Agree to Cleaques <ChakraLink href='#'>Terms and Conditions </ChakraLink> and{' '}
                      <ChakraLink href='#'>and Use of Privacy Policy</ChakraLink>
                    </Text>
                  </Checkbox>
                  <Text textStyle='subtext' ml={6}>
                    You consent to receive phone calls and SMS from Cleaques to provide updates on
                    your order and/or for msrketing purposes.
                  </Text>
                </Stack>
                <Flex justifyContent='center' mt='25px'>
                  <Stack spacing={4}>
                    <Button w={['full', '312px']}>Sign Up</Button>
                    <Text textAlign='center' textStyle='body-regular' fontWeight={400}>
                      Already have an account?{' '}
                      <ChakraLink href='/login' textStyle='body'>
                        Login
                      </ChakraLink>
                    </Text>
                  </Stack>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
