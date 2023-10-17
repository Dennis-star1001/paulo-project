import { Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import MusicBoard from "../../../assets/music-board.png"
const MainArtistBooking = () => {
    const NavLink = [
        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
        { name: "Events", to: "/user-management-reward" },
    ]
    return (
        <Box bg='#E1EEF3' p='20'>
            <Flex gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w='sm' h='80' bg='white'>
                    <Text px='5' py='5' textTransform={'uppercase'} fontWeight={'600'}>Vendor Management</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex px='5' flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w='5xl'>

                    <Text fontWeight={'bold'} textTransform={'uppercase'}>demo Afrobeats Happy song</Text>
                    <Flex alignItems={'center'} gap='5'>
                        <Image src={MusicBoard} />
                        <Box>
                            <Text fontSize={'xs'}>2 Minutes</Text>
                            <Text fontWeight={'bold'} textTransform={'uppercase'}>demo Afrobeats Happy song</Text>
                            <Text mt='3' borderRadius={'xl'} bg='#BEE7F7' w='fit-content' px='2' color={'#00B0F3'} fontSize={'xs'}>Active</Text>
                            <Text color={'#00B0F3'} fontSize={'xs'}>Change Status</Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Box fontSize={'xs'}>
                            <Text fontWeight={'bold'}>Story for the Artist</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur. Nullam ut quam nunc vel. Eget feugiat faucibus habitasse sollicitudin viverra convallis pellentesque. Erat felis pulvinar quam tellus et cursus. Enim platea praesent ullamcorper ullamcorper diam morbi eget et. Habitant laoreet eget habitasse commodo. Sed fermentum in urna feugiat luctus lacus sagittis id. Convallis diam arcu quis volutpat laoreet lorem proin enim. Eu orci in aliquam mauris.</Text>
                        </Box>

                        <Box mt='5' fontSize={'xs'}>
                            <Text fontWeight={'bold'}>Important Information</Text>
                            <Box>
                                <li>18 year old </li>
                                <li>mother of my kids</li>
                                <li>Random things</li>
                            </Box>
                        </Box>
                        <Box fontSize={'xs'}>
                            <Text fontWeight={'bold'}>Order Details</Text>
                            <Flex py='10'  justifyContent={'space-between'}>
                                <Flex borderRadius={'md'} fontSize={'xs'} height={'fit-content'} gap='2' flexDirection={'column'} bg='#F1F5F9' p='5' w='60'>
                                    <Flex>
                                        <Text fontSize={'sm'} fontWeight={'bold'}>Song Type</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Artist Name:</Text>
                                        <Text >Olayiwola Williams</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Genre:</Text>
                                        <Text >Afrobeats</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Mood:</Text>
                                        <Text>Happy</Text>
                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Song length:</Text>
                                        <Text>3 Minutes</Text>
                                    </Flex>
                                </Flex>
                                <Flex borderRadius={'md'} height={'fit-content'} fontSize={'xs'} gap='2' flexDirection={'column'} bg='#F1F5F9' p='5' w='64'>
                                    <Flex>
                                        <Text fontSize={'sm'} fontWeight={'bold'}>Song Info</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Song From:</Text>
                                        <Text >Your boyfriend - Paul </Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Song To:</Text>
                                        <Text >The love of my life - Beauty</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Occasion:</Text>
                                        <Text>On your birthday</Text>
                                    </Flex>
                                    <Box >
                                        <Text fontWeight={'bold'}>Important Information</Text>
                                        <Box>
                                            <li>18 year old</li>
                                            <li> mother of my kids</li>
                                            <li> Random things</li>
                                        </Box>
                                    </Box>
                                </Flex>
                                <Flex borderRadius={'md'} height={'fit-content'} fontSize={'xs'} gap='2' flexDirection={'column'} bg='#F1F5F9' p='5' w='64'>
                                    <Flex>
                                        <Text fontSize={'sm'} fontWeight={'bold'}>Delivery Info</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Delivery Period:</Text>
                                        <Text >2 Days (Oct 2nd)</Text>

                                    </Flex>
                                    <Flex justifyContent={'space-between'}>
                                        <Text fontWeight={'bold'}>Delivery Method:</Text>
                                        <Text >E-mail File</Text>

                                    </Flex>

                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default MainArtistBooking;