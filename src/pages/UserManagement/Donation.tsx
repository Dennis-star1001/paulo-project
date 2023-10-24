import { Box, Button, Center, Flex, IconButton, Image, Progress, Text } from "@chakra-ui/react"
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const DonationUserManagement = () => {
    const NavLink = [
        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
     
        { name: "Points", to: "/user-management-points" },
        { name: "Rewards", to: "/user-management-reward" },
    ]
    return (
        <Box bg='#E1EEF3' p='20'>
            <Flex gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w='sm' h='80' bg='white'>
                    <Text px='5' py='5' fontWeight={'600'}>User Management</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex flexDirection={'column'} gap='5' bg='white' pt='5' pb='10' h='auto' w='5xl'>
                    <Flex px='5' alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={'3xl'}  fontWeight={'500'}>Donations</Text>

                        <IconButton borderRadius={'full'} icon={<BiSearch size='20' />} />


                    </Flex>
                    <Flex gap='5' bg='#E1EEF3' p='5' mx='5' >
                        <Image
                            w='150px'
                            h='full'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text textTransform={'uppercase'} fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Flex gap='1'>
                                    <Text fontSize={'sm'}>Sponsor:</Text>
                                    <Text fontSize={'sm'} fontWeight={'600'}>IluzBrandNigeriaLimited God Grace</Text>

                                </Flex>
                                <Progress value={40} size='sm' colorScheme='blue' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button fontSize={'xs'}>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text mt='5' fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                     <Flex gap='5' bg='#E1EEF3' p='5' mx='5' >
                        <Image
                            w='150px'
                            h='full'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text textTransform={'uppercase'} fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Flex gap='1'>
                                    <Text fontSize={'sm'}>Sponsor:</Text>
                                    <Text fontSize={'sm'} fontWeight={'600'}>IluzBrandNigeriaLimited God Grace</Text>

                                </Flex>
                                <Progress value={40} size='sm' colorScheme='blue' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button bg='#128807' fontSize={'xs'}>Completed</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text mt='5' fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                     <Flex gap='5' bg='#E1EEF3' p='5' mx='5' >
                        <Image
                            w='150px'
                            h='full'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text textTransform={'uppercase'} fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Flex gap='1'>
                                    <Text fontSize={'sm'}>Sponsor:</Text>
                                    <Text fontSize={'sm'} fontWeight={'600'}>IluzBrandNigeriaLimited God Grace</Text>

                                </Flex>
                                <Progress value={40} size='sm' colorScheme='blue' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button fontSize={'xs'}>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text mt='5' fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                     <Flex gap='5' bg='#E1EEF3' p='5' mx='5' >
                        <Image
                            w='150px'
                            h='full'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text textTransform={'uppercase'} fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Flex gap='1'>
                                    <Text fontSize={'sm'}>Sponsor:</Text>
                                    <Text fontSize={'sm'} fontWeight={'600'}>IluzBrandNigeriaLimited God Grace</Text>

                                </Flex>
                                <Progress value={40} size='sm' colorScheme='blue' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button fontSize={'xs'}>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text mt='5' fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                     <Flex gap='5' bg='#E1EEF3' p='5' mx='5' >
                        <Image
                            w='150px'
                            h='full'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text textTransform={'uppercase'} fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Flex gap='1'>
                                    <Text fontSize={'sm'}>Sponsor:</Text>
                                    <Text fontSize={'sm'} fontWeight={'600'}>IluzBrandNigeriaLimited God Grace</Text>

                                </Flex>
                                <Progress value={40} size='sm' colorScheme='blue' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button fontSize={'xs'}>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text mt='5' fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                     <Flex gap='5' bg='#E1EEF3' p='5' mx='5' >
                        <Image
                            w='150px'
                            h='full'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text textTransform={'uppercase'} fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Flex gap='1'>
                                    <Text fontSize={'sm'}>Sponsor:</Text>
                                    <Text fontSize={'sm'} fontWeight={'600'}>IluzBrandNigeriaLimited God Grace</Text>

                                </Flex>
                                <Progress value={40} size='sm' colorScheme='blue' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button fontSize={'xs'}>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text mt='5' fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Center pt='20'>

                        <Button px='60'>Load More</Button>
                    </Center>

                </Flex>
            </Flex>
        </Box>
    )
}

export default DonationUserManagement;