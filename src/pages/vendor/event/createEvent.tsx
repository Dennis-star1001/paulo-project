// // import {
// //   Box,
// //   Text,
// //   Button,
// //   Input,
// //   Grid,
// //   Flex,
// //   Image,
// //   GridItem,
// //   InputGroup,
// //   InputLeftElement
// // } from '@chakra-ui/react';
// // import FileDropzone from './fileDrop';
// // import DashboardHeader from '../dashboard/Header/DashboardHeader';

// // const CreateEvent = () => {
// //   return (
// //     <>
// //       <DashboardHeader />
// //       <Box mx='auto' maxW='960px' p='10px'>
// //         <Text> Create Events</Text>
// //         <Flex flexDirection='row' alignItems='center'>
// //           <Box>
// //             <FileDropzone />
// //           </Box>
// //           <Box>
// //             <Box>
// //               <Text fontFamily='Lato' fontWeight='400' fontSize={{ base: '0', md: '26px' }}>
// //                 Events
// //               </Text>
// //             </Box>
// //             <Box h='55px' display='flex' borderRadius='4px #0D0D0D1A '>
// //               <InputGroup maxW='200px'>
// //                 <InputLeftElement pointerEvents='none'></InputLeftElement>
// //                 <Input placeholder='Search for events' bg='#FFFFFF' />
// //               </InputGroup>

// //             </Box>
// //           </Box>
// //         </Flex>
// //       </Box>
// //     </>
// //   );
// // };

// // export default CreateEvent;
// import {
//   Box,
//   Text,
//   Button,
//   Input,
//   Grid,
//   Flex,
//   Image,
//   GridItem,
//   InputGroup,
//   InputLeftElement,
//   Select, // Import Select component for event location
// } from '@chakra-ui/react';
// import FileDropzone from './fileDrop';
// import DashboardHeader from '../dashboard/Header/DashboardHeader';

// const CreateEvent = () => {
//   return (
//     <>
//       <DashboardHeader />
//       <Box mx='auto' maxW='960px' p='10px'>
//         <Text> Create Events</Text>
//         <Flex  display='flex' flexDirection='row' alignItems='center'>
//           <Box>
//             <FileDropzone />
//           </Box>
//           <Box flex={1} ml={4}>
//           <Box mt={4}>
//             <Text>
//               Event Category
//             </Text>
//               <Select placeholder='Select an option'>
//                 <option value='free'>Free</option>
//                 <option value='paid'>Paid</option>
//               </Select>
//             </Box>
//             <Box mt={4}>
//               <Text>Event Title</Text>
//               <Input placeholder='Name of your event' />
//             </Box>
//             <Box mt={4}>
//               <Text>Event Description</Text>
//               <Input placeholder='Event Description' />
//             </Box>
//             <Box mt={4}>
//               <Select placeholder='Event Location'>
//                 <option value='online'>Online</option>
//                 <option value='venue'>Venue</option>
//                 <option value='to_be_announced'>To Be Announced</option>
//               </Select>
//             </Box>
//             <Box mt={4}>
//               <Input type='datetime-local' placeholder='Date and Time' />
//             </Box>
//             <Box mt={4}>
//               <Select placeholder='Event Type'>
//                 <option value='free'>Free</option>
//                 <option value='paid'>Paid</option>
//               </Select>
//             </Box>
//           </Box>
//         </Flex>
//       </Box>
//     </>
//   );
// };

// export default CreateEvent;
import React from 'react';
import {
  Box,
  Text,
  Button,
  Input,
  Flex,
  Image,
  Select,
  FormControl,
  FormLabel,
  Link,
  Textarea
} from '@chakra-ui/react';
import FileDropzone from './fileDrop';
import DashboardHeader from '../dashboard/Header/DashboardHeader';
import plus from '../../../assets/plus.svg';

const CreateEvent = () => {
  const [eventLocation, setEventLocation] = React.useState('');
  const [onlineEventData, setOnlineEventData] = React.useState({
    eventName: '',
    eventDescription: ''
  });

  const [venueEventData, setVenueEventData] = React.useState({
    eventName: '',
    eventDescription: '',
    venue: '',
    dateTime: ''
  });
  const [laterEventData, setLaterEventData] = React.useState({
    eventName: '',
    eventDescription: '',
    venue: '',
    dateTime: ''
  });

  const handleEventLocationChange = (value: string) => {
    setEventLocation(value);
  };

  // const handleOnlineEventSubmit = () => {
  //   console.log('Online Event Data:', onlineEventData);
  // };

  // const handleVenueEventSubmit = () => {
  //   console.log('Venue Event Data:', venueEventData);
  // };
  // const handleLaterEventSubmit = () => {
  //   console.log('Venue Event Data:', laterEventData);
  // };

  return (
    <>
      <DashboardHeader />
      <Box mx='auto' maxW='960px' p='10px'>
        <Text
          fontFamily='Lato'
          fontWeight='600'
          fontSize={{ base: '16px', md: '36px' }}
          color='#201E1F'
        >
          {' '}
          Create Events
        </Text>
        <Flex flexDirection={['column', 'column', 'row']} alignItems='center'>
          <Box>
            <FileDropzone />
          </Box>
          <Box ml={4} flex={1}>
            <Box ml={4}>
              <Box mt={4}>
                <Text>Event Category</Text>
                <Select placeholder='Select an option'>
                  <option value='free'>Free</option>
                  <option value='paid'>Paid</option>
                </Select>
              </Box>
              <Box mt={4}>
                <Text>Event Title</Text>
                <Input placeholder='Name of your event' />
              </Box>
            </Box>

            <Box mt={4}>
              <Text> Event Description</Text>
              <Textarea
                placeholder='Add more details to your service like your schedule, sponsors or featured guests.'
                size='sm'
                onChange={(e) => {
                  setOnlineEventData({ ...onlineEventData, eventDescription: e.target.value });
                }}
              />
            </Box>
            <Box mt={4}>
              <FormControl>
                <FormLabel>Event Location</FormLabel>
                <Box display='flex' alignItems='center' gap={3}>
                  <Button
                    variant={eventLocation === 'online' ? 'solid' : 'outline'}
                    colorScheme='blue'
                    onClick={() => handleEventLocationChange('online')}
                  >
                    Online
                  </Button>
                  <Button
                    variant={eventLocation === 'venue' ? 'solid' : 'outline'}
                    colorScheme='blue'
                    onClick={() => handleEventLocationChange('venue')}
                  >
                    Venue
                  </Button>
                  <Button
                    variant={eventLocation === 'later' ? 'solid' : 'outline'}
                    colorScheme='blue'
                    onClick={() => handleEventLocationChange('later')}
                  >
                    To be announced
                  </Button>
                </Box>
              </FormControl>
            </Box>
            {eventLocation === 'online' && (
              <Box mt={4}>
                <FormControl>
                  <Input
                    placeholder='Add link to event'
                    onChange={(e) => {
                      setVenueEventData({ ...venueEventData, venue: e.target.value });
                    }}
                  />
                </FormControl>

                {/* <Button colorScheme='blue' onClick={handleOnlineEventSubmit}>
                  Submit Online Event
                </Button> */}
              </Box>
            )}
            {eventLocation === 'venue' && (
              <Box mt={4}>
                <FormControl>
                  <Input
                    placeholder=' Add location or address'
                    onChange={(e) => {
                      setVenueEventData({ ...venueEventData, venue: e.target.value });
                    }}
                  />
                </FormControl>
                {/* <Button colorScheme='blue' onClick={handleVenueEventSubmit}>
                  Submit Venue Event
                </Button> */}
              </Box>
            )}
            <Text> Start</Text>
            <Box display='flex' flexDirection='row' gap={3} mt={4}>
              <Input type='date' placeholder='Date and Time' />
              <Input type='time' placeholder='Date and Time' />
            </Box>
            <Text> End</Text>

            <Box display='flex' flexDirection='row' gap={3} mt={4}>
              <Input type='date' placeholder='Date and Time' />
              <Input type='time' placeholder='Date and Time' />
            </Box>
            <FormControl mb={5}>
              <FormLabel>Event Type</FormLabel>
              <Box display='flex' alignItems='center' gap={3}>
                <Button
                  variant={eventLocation === 'free' ? 'solid' : 'outline'}
                  colorScheme='blue'
                  onClick={() => handleEventLocationChange('free')}
                >
                  Free
                </Button>
                <Button
                  variant={eventLocation === 'paid' ? 'solid' : 'outline'}
                  colorScheme='blue'
                  onClick={() => handleEventLocationChange('paid')}
                >
                  Paid
                </Button>
              </Box>
            </FormControl>

            {eventLocation === 'paid' && (
              <Box mt={4}>
                <FormControl>
                  <Input
                    placeholder=' Ticket name'
                    onChange={(e) => {
                      setVenueEventData({ ...venueEventData, venue: e.target.value });
                    }}
                  />
                  <Box display='flex' mt={7} gap={3}>
                    <Input
                      placeholder='Quantity'
                      type='number'
                      onChange={(e) => {
                        setVenueEventData({ ...venueEventData, venue: e.target.value });
                      }}
                    />{' '}
                    <Input
                      placeholder=' Price'
                      type='number'
                      onChange={(e) => {
                        setVenueEventData({ ...venueEventData, venue: e.target.value });
                      }}
                    />
                  </Box>
                </FormControl>
              </Box>
            )}
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
            <Box display='flex' m={7} flexDirection='column' gap={3}>
              <Button>Post Event</Button>
              <Button>Save for Later</Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CreateEvent;
