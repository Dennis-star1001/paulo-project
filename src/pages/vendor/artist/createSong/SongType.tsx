import { Box, Button, Center, Divider, Flex, FormLabel, Input, Radio, Select, Text } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillClipboardFill, BsMusicNoteBeamed } from "react-icons/bs"
import { Link } from "react-router-dom"

const SongType = () => {
    return (
        <Box py='10' bg='#F1F5F9'>
            <Text fontSize={'2xl'} textAlign={'center'}>Tell us how to create a song for you</Text>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Box bg='#00B0F3' p='4' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <BsMusicNoteBeamed color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} position={'absolute'}>Song Type</Text>
                </Box>
                <Divider w='52' orientation="horizontal" />
                <Box>
                    <Box bg='white' border='1px solid #00B0F3' p='4' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <BsFillClipboardFill color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} position={'absolute'}>Song Info</Text>
                </Box>
                <Divider w='52' orientation="horizontal" />
                <Box>
                <Box bg='white' border='1px solid #00B0F3' p='4' borderRadius={'full'}>
                    <Box bg='white' p='1' borderRadius={'lg'}>

                        <AiFillCheckCircle color='#00B0F3' size='24' />
                    </Box>
                </Box>
                <Text fontSize={'sm'} position={'absolute'}>Checkout</Text>
                </Box>

            </Flex>
            <Box w='100%'>
                <Flex justifyContent={'center'}>
                    <Box py='10'>
                        <Text textAlign={'center'}>Tell us how your want your song to sound like</Text>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Artist Name</FormLabel>
                            <Input bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Genre</FormLabel>
                            <Select bg='white'>
                                <option>Highlife</option>
                                <option>Jazz</option>
                                <option>RnB</option>
                                <option>Afrobeat</option>
                                <option>Hip Hop</option>
                                <option>Gospel</option>
                            </Select>
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Song Mood</FormLabel>
                            <Select bg='white'>
                                <option>Happy</option>
                                <option>Sad</option>
                                <option>Romantic</option>
                                <option>Reflective</option>
                                <option>Funny</option>
                                <option>Dark/Emo</option>
                            </Select>
                        </Box>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Song Length</FormLabel>
                            <Flex gap='10'>
                                <Box bg='white' p='5' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'flex-start'} value='1'>
                                        <Box >
                                            <Text fontWeight={'bold'}>3 Minutes - $20</Text>
                                            <Text maxW={'60'} fontSize={'sm'}>Contains three verses (or two verses & a bridge), and a repeated chorus. Approx. 180 words.</Text>
                                        </Box>
                                    </Radio>
                                </Box>
                                <Box bg='white' p='5' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'flex-start'} value='1'>
                                        <Box >
                                            <Text fontWeight={'bold'}>2 Minutes - $15</Text>
                                            <Text maxW={'60'} fontSize={'sm'}>Contains two verses and a repeated chorus. Approx. 120 words.</Text>
                                        </Box>
                                    </Radio>
                                </Box>
                            </Flex>
                        </Box>
                        <Center pt='10'>
                            <Link to='/create-song/song-info'>
                            <Button px='10'>Continue</Button>
                            </Link>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default SongType