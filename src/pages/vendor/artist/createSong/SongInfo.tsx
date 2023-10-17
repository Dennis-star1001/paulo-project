import { Box, Button, Center, Divider, Flex, FormLabel, Input, Radio, Select, Text, Textarea } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillClipboardFill, BsMusicNoteBeamed } from "react-icons/bs"
import { Link } from "react-router-dom"

const SongInfo = () => {
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
                    <Box bg='#00B0F3' p='4' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                        <BsFillClipboardFill color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} position={'absolute'}>Song Type</Text>
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
                        <Text textAlign={'center'}>Give the artist information on how you  want your song structured<br></br> and the details needed in your song </Text>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Song From?</FormLabel>
                            <Input bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Who is the song to?</FormLabel>
                            <Input bg='white' />
                        </Box>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Occasion</FormLabel>
                            <Input bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Story for the artist to tell</FormLabel>
                            <Textarea bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Important Information</FormLabel>
                            <Input bg='white' />
                        </Box>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Add Photo</FormLabel>
                            <Input bg='white' />
                        </Box>

                        <Center pt='10'>
                            <Flex gap='5'>
                                <Link to='/create-song/song-info'>
                                    <Button px='10'>Back</Button>
                                </Link>
                                <Link to='/create-song/checkout'>
                                    <Button px='10'>Continue</Button>
                                </Link>
                            </Flex>

                        </Center>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default SongInfo
