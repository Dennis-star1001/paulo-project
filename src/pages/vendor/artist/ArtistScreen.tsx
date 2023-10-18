import { Box, Button, Center, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text } from "@chakra-ui/react"
import ArtistImage from "../../../assets/Artist-bg-image.png"
import { FormInput, IconButton } from "@/components";
import { RiFilter3Line, RiSearch2Line } from "react-icons/ri";
import MusicPlayer from "./components/MusicPlayer";
import AfterLoginHeader from "@/components/Header/AfterLoginHeader";
const ArtistScreen = () => {
    interface EventLink {
        link: string;
        name: string;
    }

    const eventLinks: EventLink[] = [
        { name: 'Hip Hop', link: '/Online_Events' },
        { name: 'AfroBeats', link: '/free_events' },
        { name: 'RnB', link: '/paid_events' },
        { name: 'Country', link: '/upcoming_events' },
        { name: 'Jazz', link: '/events_near' },
        { name: 'Highlife', link: '/training' },
        { name: 'Rock', link: '/training' },
        { name: 'Drill', link: '/training' },


    ];

    return (
        <Box bg='#F1F5F9' >
             <AfterLoginHeader />
            <Box position={'relative'}>

                <Image src={ArtistImage} />
                <Center>

                    <Flex gap={'5'} alignItems={'center'} flexDirection='column' color={'white'} textAlign={'center'} position={'absolute'} bottom={'20'}>
                        <Text fontWeight={'bold'} fontSize={'4xl'}>Artists</Text>
                        <Link to='/create-song/song-type'>
                            <Button w='40' fontSize={'sm'}>Create my song</Button>
                        </Link>
                        <Text fontSize={'sm'}>Create a song to celebrate that special occasion, person or event</Text>
                    </Flex>
                </Center>
            </Box>
            <Box p='10'>
                <Center w={'full'}>
                    <Flex gap='3' w='fit-content' justifyContent={'center'} alignItems={'center'}>
                        <Menu>
                            <MenuButton >
                                <IconButton display={['none', 'block']} icon={<RiFilter3Line />} />

                            </MenuButton>
                            <MenuList>
                                <MenuItem>Artist Name</MenuItem>
                                <MenuItem>Genre</MenuItem>
                                <MenuItem>Location</MenuItem>
                                <MenuItem>Song</MenuItem>

                            </MenuList>
                        </Menu>
                        <FormInput w='xl' bgColor='#fff' />

                        <IconButton px='3 ' w='fit-content' icon={<RiSearch2Line />}>Search</IconButton>
                    </Flex>
                </Center>
                <Box px='10' py='10'>
                    <Text textAlign={'center'} fontWeight={'bold'} pb='5'>HOW WE WORK</Text>
                    <Flex justifyContent={'center'}>
                        <Flex gap='5'>
                            <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                                <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>1</Text>
                                <Text w='xs' fontSize={'sm'}>Customize your song
                                    Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                            </Flex>
                            <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                                <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>2</Text>
                                <Text w='xs' fontSize={'sm'}>Customize your song
                                    Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                            </Flex>
                            <Flex gap='5' p='5' flexDirection={'column'} bg='#E1EEF3'>
                                <Text bg='#00B0F3' color='white' w='fit-content' py='3' px='5' borderRadius={'full'}>3</Text>
                                <Text w='xs' fontSize={'sm'}>Customize your song
                                    Select your favorite artist, genre, desired length, mood, and share your unique story.</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Flex py='10' px='10'>
                    <Box py='5'>
                        <Text pb='2' textTransform={'uppercase'} fontWeight={'bold'} >Trending Genre</Text>
                        <Flex gap='5'>
                            {eventLinks.map((eventLink, i) => (
                                <Link href={eventLink.link} key={`eventlink_${i}`} justifyContent='space-around'>
                                    <Box
                                        mr='4'
                                        px='7'
                                        py='1'
                                        bg='#E1EEF3'
                                        display='inline-flex'
                                        borderRadius='4px'
                                        alignItems='center'
                                        color='#00B0F3'
                                        fontWeight='600'
                                        fontSize='15px'
                                        lineHeight='34.5px'
                                    >
                                        {eventLink.name}
                                    </Box>
                                </Link>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
                <Flex px='10' justifyContent={'center'}>
                    <SimpleGrid spacing={'10'} columns={[1, 4]}>

                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                        <MusicPlayer />
                    </SimpleGrid>
                </Flex>
                <Center pt='20'>

                    <Button px='40'>Load More</Button>
                </Center>
            </Box>
        </Box>
    )
}

export default ArtistScreen;