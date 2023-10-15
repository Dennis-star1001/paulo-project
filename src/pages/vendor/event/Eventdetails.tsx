import { useState } from 'react';
import {
  Box,
  Image,
  Flex,
  Link,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { PiShareFatLight } from 'react-icons/pi';
import { BiCalendar } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Breezy from '../../../assets/Breezey.png';
import DashboardHeader from '../dashboard/Header/DashboardHeader';
import trash from '../../../assets/trash.svg';
import plus from '../../../assets/plus.svg';
import edit from '../../../assets/edit.svg';

const EventDetails = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const breakpoint = '768px';

  const [isMobile] = useMediaQuery(`(max-width: ${breakpoint})`);

  const handleDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const activeOrders = [
    {
      Tickets: ' Vip',
      Sold: 332,
      Total: 1400,
      Price: '$500',
      soldOut: true
    },
    {
      Tickets: ' Regular',
      Sold: 332,
      Total: 1400,
      Price: '$800',
      soldOut: false
    },
    {
      Tickets: ' Vvip',
      Sold: 332,
      Total: 1400,
      Price: '$800',
      soldOut: false
    }
  ];

  return (
    <>
      <DashboardHeader />
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontFamily='Lato'
            fontWeight='600'
            fontSize={{ base: '12px', md: '16px' }}
            color='#201E1F'
          >
            Delete Event
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontFamily='Lato'
              fontWeight='600'
              fontSize={{ base: '12px', md: '14px' }}
              color='#201E1F'
            >
              Are you sure you want to delete this event?
            </Text>
            All unclaimed withdrawal would be forfeited and all tickets bought would be refunded to
            the each user.
          </ModalBody>
          <ModalFooter display='flex' gap={3}>
            <Button
              variant='ghost'
              border='1px #CBD5E1'
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button bg='#FF543E' onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        mt={10}
        paddingX="210px"
        display={['none', 'none', 'flex']}
      >
        <Text
          fontFamily='Lato'
          fontWeight='600'
          fontSize={{ base: '12px', md: '36px' }}
          color='#201E1F'
        >
          {' '}
          Event
        </Text>
        <Button>Create Event</Button>
      </Flex>
      <Box p={[2, 4, '200px']}>
        <Box p={[2, 4, 5]} pt={[2, 4, '10']} mt={[-4, -4, '-200']}>
          <Image w='100%' h={['auto', 'auto', '448px']} borderRadius='5px' src={Breezy} />
        </Box>
        <Flex
          flexDir={['column', 'column', 'row']}
          justifyContent={['center', 'center', 'space-between']}
          alignItems={['stretch', 'stretch', 'center']}
        >
          <Box
            p={4}
            w={['100%', '100%', '80%']}
            borderRadius={['0', '0', '8px']}
            color='#201E1F'
            fontFamily='Lato'
            mb={4}
          >
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Text
                textTransform='uppercase'
                fontWeight='600'
                fontSize={['16px', '18px', '18px']}
                lineHeight={['28px', '34.5px', '34.5px']}
              >
                State Music Awards for minds in the music industry
              </Text>
              <Link href='#' p='1'>
                <PiShareFatLight fontSize={['24px', '30px', '30px']} color='#00B0F3' />
              </Link>
            </Box>
            <Flex flexDirection={['column', 'column', 'row']} mt={2}>
              <Box display='flex' alignItems='center' py={2}>
                <Box
                  h='43px'
                  w='43px'
                  borderRadius='4px'
                  bg='#E1EEF3'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  mr={2}
                >
                  <BiCalendar color='#00B0F3' fontSize='25px' />
                </Box>
                <Text fontSize='14px' fontWeight='400'>
                  Aug 6 - Aug 13, 2023 | 6:00pm GMT
                </Text>
              </Box>
              <Box display='flex' alignItems='center' py={2}>
                <Box
                  h='43px'
                  w='43px'
                  borderRadius='4px'
                  bg='#E1EEF3'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  mr={2}
                >
                  <HiOutlineLocationMarker color='#00B0F3' fontSize='25px' />
                </Box>
                <Text fontSize='14px' fontWeight='400'>
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </Text>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                flexDirection={['column', 'column', 'column']}
                mt={2}
              >
                <Box display='flex' alignItems='center' flexDirection='row'>
                  <Button
                    mr={2}
                    lineHeight='17px'
                    fontFamily='Inter'
                    fontSize='14px'
                    bg='#E1EEF3'
                    color='#00B0F3'
                    p={3}
                  >
                    Edit Event
                  </Button>
                  <Button
                    bg='#F20E0E'
                    color='#FFFFFF'
                    lineHeight='17px'
                    fontFamily='Inter'
                    fontSize='14px'
                    p={3}
                    onClick={() => setIsDeleteModalOpen(true)}
                  >
                    <Image src={trash} />
                  </Button>
                </Box>
                <Text
                  color='#00B0F3'
                  lineHeight={['20px', '24.08px', '24.08px']}
                  fontWeight='600'
                  fontSize={['12px', '14px', '14px']}
                  mt={2}
                >
                  Available Tickets: 05
                </Text>
              </Box>
            </Flex>

            <Box py={4}>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Tempus dui in nibh eu quam tortor. Dolor
                hendrerit est morbi sem nisl morbi tempus. Quis amet phasellus vel commodo nunc
                habitant. Elementum viverra sed in suspendisse id. Ut risus suscipit praesent
                varius. Ornare pharetra magna pellentesque lacus. Sit lectus eget congue ut ipsum a.
                Interdum enim quam morbi orci quam. Cursus at et sit elit. Leo volutpat et duis
                pellentesque amet. Vitae viverra curabitur a nam.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box mt='4'>
          <Table variant='simple' maxW={isMobile ? '90%' : 'unset'}>
            <Thead>
              <Tr
                fontFamily='Lato'
                fontWeight='600'
                fontSize={{ base: '12px', md: '16px' }}
                color='#00B0F3'
              >
                <Th color='#00B0F3' textDecoration='none'>
                  Tickets
                </Th>
                <Th textDecoration='none' color='#00B0F3'>
                  Sold
                </Th>
                <Th textDecoration='none' color='#00B0F3'>
                  Total
                </Th>
                <Th textDecoration='none' color='#00B0F3'>
                  Price
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {activeOrders.map((order, index) => (
                <Tr
                  fontFamily='Lato'
                  fontWeight='600'
                  fontSize={{ base: '12px', md: '16px' }}
                  key={index}
                >
                  <Td>{order.Tickets}</Td>
                  <Td>{order.Sold}</Td>
                  <Td>{order.Total}</Td>
                  <Td>{order.Price}</Td>
                  <Td>
                    {order.soldOut ? (
                      <Text color='#128807'>Sold out</Text>
                    ) : (
                      <Flex>
                        <Button
                          mr={2}
                          lineHeight='17px'
                          fontFamily='Inter'
                          fontSize='14px'
                          bg='#00B0F3'
                          p={3}
                        >
                          <Image src={edit} />
                        </Button>
                        <Button
                          bg='#F20E0E'
                          color='#FFFFFF'
                          lineHeight='17px'
                          fontFamily='Inter'
                          fontSize='14px'
                          p={3}
                          onClick={() => setIsDeleteModalOpen(true)}
                        >
                          <Image src={trash} />
                        </Button>
                      </Flex>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Link href='#' width='fit-content'>
          <Box display='flex' justifyContent='center' gap={2} mt={10}>
            <Image src={plus} />
            <Text
              as='span'
              fontFamily='Lato'
              fontWeight='600'
              fontSize={{ base: '12px', md: '16px' }}
              color='#00B0F3'
            >
              Add Ticket Category
            </Text>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default EventDetails;
