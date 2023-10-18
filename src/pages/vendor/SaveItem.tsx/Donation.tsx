import { Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react"
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VendorSaveItemDonation = () => {
    const NavLink = [
        { name: "Post", to: "/vendor/saved-item-post" },
        { name: "Booking", to: "/vendor/saved-item-booking" },
        { name: "Donation", to: "/vendor/saved-item-donation" },
        { name: "Event", to: "/vendor/saved-item-event" },
    ]
    return (
        <Box bg='#E1EEF3' p={['5','20']}>
            <Flex flexDirection={['column','row']} gap='10'>
                <Flex  textAlign={'left'} flexDirection={'column'} w={['auto','sm']} h='80' bg='white'>
                <Text px='5' py='5' fontSize={'20'} fontWeight={'500'}>Saved Items</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w={['auto','5xl']}>
                <Text px='5' py='5' fontSize={'20'} fontWeight={'500'}>Donations</Text>
                    <Flex alignItems={'center'} gap='5' bg='#E1EEF3' p='5' mx={['5','10']} >
                        <Image
                            w={['20','200px']}
                            h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['14','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Text fontWeight={'600'}>$4,000</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button borderRadius={'0'}>View Details</Button>

                               
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'} gap='5' bg='#E1EEF3' p='5' mx={['5','10']} >
                        <Image
                            w={['20','200px']}
                            h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['14','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Text fontWeight={'600'}>$4,000</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button borderRadius={'0'}>View Details</Button>

                               
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'} gap='5' bg='#E1EEF3' p='5' mx={['5','10']} >
                        <Image
                            w={['20','200px']}
                            h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['14','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Text fontWeight={'600'}>$4,000</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button borderRadius={'0'}>View Details</Button>

                               
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'} gap='5' bg='#E1EEF3' p='5' mx={['5','10']} >
                        <Image
                            w={['20','200px']}
                            h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['14','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Text fontWeight={'600'}>$4,000</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button borderRadius={'0'}>View Details</Button>

                               
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'} gap='5' bg='#E1EEF3' p='5' mx={['5','10']} >
                        <Image
                            w={['20','200px']}
                            h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['14','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Text fontWeight={'600'}>$4,000</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button borderRadius={'0'}>View Details</Button>

                               
                            </Flex>
                        </Flex>
                    </Flex>

                  
                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorSaveItemDonation;