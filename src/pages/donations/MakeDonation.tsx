import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import OTPInput from 'react-otp-input';
const MakeDonation = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const openFirstModal = () => {
    setIsFirstModalOpen(true);
    setIsSecondModalOpen(false);
  };

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const openSecondModal = () => {
    setIsFirstModalOpen(false); // Close the first modal
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };
  return (
    <>
      <Button onClick={openFirstModal} w='fit-content'>
        Donate Again
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isFirstModalOpen}
        onClose={closeFirstModal}
      >
        <ModalOverlay />
        <ModalContent bg={'rgba(241, 245, 249, 1)'}>
          <Flex alignItems={'center'}>
            <ModalHeader>
              <Text textTransform={'uppercase'} w='80'>
                Make Donation
              </Text>
              <Text textTransform={'uppercase'} mt='2' fontSize={'md'} fontWeight={'medium'}>
                Help my life, landlord wan beat me
              </Text>
              <AvatarGroup gap='5'>
                <Avatar size='xs' name='N' />
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  Nicholas Adams
                </Text>
              </AvatarGroup>
            </ModalHeader>
            <ModalCloseButton
              color='white'
              h='5'
              w='5'
              borderRadius={'20px'}
              bg='rgba(0, 176, 243, 1)'
            />
          </Flex>

          <ModalBody pb={6}>
            <Flex pb='5' justifyContent={'space-between'}>
              <Text fontWeight={'medium'} fontSize={'sm'}>
                Donate as anonymous{' '}
              </Text>
              <Checkbox defaultChecked />
            </Flex>
            <Input
              bg='white'
              ref={initialRef}
              placeholder='Amount'
              _placeholder={{ color: 'rgba(173, 168, 171, 1)' }}
            />

            <Divider color='gray' my='5' />
            <Text fontWeight={'medium'} fontSize={'sm'}>
              Billing Information
            </Text>
            <Flex pt='5' flexDirection={'column'} gap='3'>
              <Input
                bg='white'
                ref={initialRef}
                placeholder='Email Address'
                _placeholder={{ color: 'rgba(173, 168, 171, 1)' }}
              />
              <Input
                bg='white'
                ref={initialRef}
                placeholder='Phone Number'
                _placeholder={{ color: 'rgba(173, 168, 171, 1)' }}
              />
              <Input
                bg='white'
                ref={initialRef}
                placeholder='Address'
                _placeholder={{ color: 'rgba(173, 168, 171, 1)' }}
              />
              <Input
                bg='white'
                ref={initialRef}
                placeholder='Zip Code (optinal)'
                _placeholder={{ color: 'rgba(173, 168, 171, 1)' }}
              />
            </Flex>
          </ModalBody>
          <Divider my='5' color={'gray'} />

          <Flex mx='10' mb='10' gap='3' alignItems={'center'} flexDirection={'column'}>
            <Button onClick={closeFirstModal} w='full' bg='rgba(0, 176, 243, 1)'>
              Check out $1,420.00
            </Button>
            <Text>Or</Text>
            <Button onClick={openSecondModal} w='full' bg='rgba(233, 99, 75, 1)'>
              Pay with point
            </Button>
          </Flex>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSecondModalOpen} onClose={closeSecondModal}>
        <ModalOverlay />
        <ModalContent bg={'rgba(241, 245, 249, 1)'} h='100%' py='5'>
          <ModalBody>
            <Box>
              <Button
                onClick={openFirstModal}
                _hover={{ bg: 'none' }}
                leftIcon={<BsArrowLeft />}
                bg='none'
                color='black'
                fontWeight={'normal'}
              >
                Pay with Points
              </Button>
              <Box py='5'>
                <Input bg='white' placeholder='Amount of points' />
                <Text py='1' fontSize={'xs'} color={'#00B0F3'}>
                  Points Balance: 22,646
                </Text>
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  my='10'
                >
                  <Text fontWeight={'600'} mb='5' fontSize={'sm'} textAlign={'center'}>
                    Enter Transaction Pin
                  </Text>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputStyle={{ width: '60px', height: '60px' }}
                    renderInput={(props) => (
                      <Input bg='white' px='0' _notLast={{ marginRight: '10' }} {...props} />
                    )}
                  />
                </Flex>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button w='full' onClick={closeSecondModal}>
              Donate Points
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default MakeDonation;
