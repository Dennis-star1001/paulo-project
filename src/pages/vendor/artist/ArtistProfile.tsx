import { Box, Button, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { AiOutlineHeart } from "react-icons/ai";
import Bannar from "../../../assets/dummy-banner.png"
import { BsPerson } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import MusicPlayer from "./components/MusicPlayer";
import ArtistMusic from "./components/ArtistMusic";
import Reviews from "./components/Review";
import { Link } from "react-router-dom";
import AfterLoginHeader from "@/components/Header/AfterLoginHeader";
const ArtistProfile = () => {

    const padding = [2, '50px'];
    const spacing = [4, 5];
    return (
        <Box bg='#0D0D0D1A'  w='100%'>
             <AfterLoginHeader />
            <Flex py='10' px={padding}  gap=''>
                <Box  w='70%' px={10}>
                    <Center mb={['0', '20']} position={'relative'} display='flex'   sx={{ svg: { fontSize: '20px' } }}>
                        <Box  >
                            <Box >
                                <Image w={'6xl'} h={'80'} objectFit={'cover'} src={Bannar} />

                            </Box>
                            <Flex w={{ base: 'auto', md: '100%' }} gap='5' mt='5' alignItems={'end'} position={['unset', 'absolute']} bottom='-24'>
                                <Image ml='5' w={['16', '40']} objectFit={'cover'} border={['none', '5px solid white']} h={['16', '40']} borderRadius={'full'} src={Bannar} />
                                <Flex w='full' justifyContent={'space-between'} >

                                    <Box>
                                        <Text fontSize={['14', 'sm']}>Stage name</Text>
                                        <Text fontSize={'lg'} w='fit-content' textAlign={'center'} fontWeight={'bold'} >B.BOy ATL</Text>
                                        <Flex alignItems={'center'} pt='1' gap='10'>
                                            <Flex gap='1'>
                                                <Text color='#00B0F3'>20</Text>
                                                <Text>Following</Text>
                                            </Flex>
                                            <Flex gap='1'>
                                                <Text color='#00B0F3'>20</Text>
                                                <Text>Following</Text>
                                            </Flex>
                                            <Flex gap='1'>
                                                <Button leftIcon={<BsPerson />}>Follow</Button>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Flex gap='5'>
                                        <Button bg='none'><BiChat size='28' color='#00B0F3' /></Button>
                                        <Link to='/create-song/song-type'>
                                        <Button>Create my song</Button>
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>


                    </Center>
                    <Box pt='10' px={'20'}>
                        <Text fontSize={'sm'}>Lorem ipsum dolor sit amet consectetur. In praesent sed enim lacus ultrices. Enim vulputate in eu purus in semper imperdiet sed eget. Tellus varius maecenas risus felis. Venenatis integer semper integer lorem et nullam purus id eleifend. Phasellus imperdiet varius lectus tincidunt gravida. Lorem et consequat dui quis ut.</Text>
                        <Flex gap='3' py='5'>
                            <Text bg='#F1F5F9' px='3' borderRadius={'sm'} color='#00B0F3'>RnB</Text>
                            <Text bg='#F1F5F9' px='3' borderRadius={'sm'} color='#00B0F3'>Hip Hop</Text>
                            <Text bg='#F1F5F9' px='3' borderRadius={'sm'} color='#00B0F3'>Afro fusion</Text>
                        </Flex>
                    </Box>
                    <Box bg='white' p='5'>
                        <Text mb='5'>Pricing</Text>
                        <Flex justifyContent={'space-between'}>
                            <Box>
                                <Text fontWeight={'bold'}>2 Minutes Track - $50</Text>
                                <Text pt='2' fontSize={'sm'} maxW='60' color='#4D4D4D'>Contains two verses and a repeated chorus. Approx. 120 words.</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'}>2 Minutes Track - $50</Text>
                                <Text pt='2' fontSize={'sm'} maxW='60' color='#4D4D4D'>Contains two verses and a repeated chorus. Approx. 120 words.</Text>
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'}>2 Minutes Track - $50</Text>
                                <Text pt='2' fontSize={'sm'} maxW='60' color='#4D4D4D'>Contains two verses and a repeated chorus. Approx. 120 words.</Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Box>
                        <Text py='5'>Sample Songs</Text>
                        <SimpleGrid gap='10' columns={[1, 3]}>
                            <ArtistMusic />
                            <ArtistMusic />
                            <ArtistMusic />
                            <ArtistMusic />
                            <ArtistMusic />
                            <ArtistMusic />
                        </SimpleGrid>
                    </Box>
                    <Box>
                        <Text py='5'>Reviews</Text>
                        <Flex gap='5'>
                        <Reviews/>
                        <Reviews/>
                        <Reviews/>
                       

                        </Flex>
                    </Box>
                </Box>

                <Box>
                    <Flex flexDirection={'column'} bg='white' gap='3' p='10' px={spacing} >
                        <Text fontWeight={'bold'}>Similar Artist</Text>
                        <MusicPlayer background='#F1F5F9' />
                        <MusicPlayer background='#F1F5F9' />
                        <MusicPlayer background='#F1F5F9' />
                       
                    </Flex>
                </Box>
                
            </Flex>
        </Box>
    )
}
export default ArtistProfile;