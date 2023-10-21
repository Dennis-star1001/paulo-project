import { Box, Button, Center, Divider, Flex, FormLabel, Input, Radio, RadioGroup, Select, Text, background } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillClipboardFill, BsMusicNoteBeamed } from "react-icons/bs"
import { Link } from "react-router-dom"

import { useState } from "react"
import AfterLoginHeader from "@/components/Header/AfterLoginHeader"

const SongType = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
        
    };

    return (
        <Box bg='#F1F5F9'>
             <AfterLoginHeader />
            <Text   py='10' fontSize={'3xl'} textAlign={'center'}>Tell us how to create a song for you</Text>
            <Flex mt='5' justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Box bg='#00B0F3' p='2' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <BsMusicNoteBeamed color='#00B0F3' size='14' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} fontWeight={'bold'} position={'absolute'}>Song Type</Text>
                </Box>
                <Divider w='24' orientation="horizontal" />
                <Box>
                    <Box bg='white' border='1px solid #00B0F3' p='1' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <BsFillClipboardFill color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} position={'absolute'}>Song Info</Text>
                </Box>
                <Divider w='24' orientation="horizontal" />
                <Box>
                    <Box bg='white' border='1px solid #00B0F3' p='1' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <AiFillCheckCircle color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} position={'absolute'}>Checkout</Text>
                </Box>

            </Flex>
            <Box w='100%'>
                <Flex justifyContent={'center'}>
                    <Box py='10' w='lg'>
                        <Text fontSize={'sm'} mt='10' textAlign={'center'}>Tell us how your want your song to sound like</Text>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Artist Name</FormLabel>
                            <Input fontSize={'sm'} placeholder="Type in the name of the artist" bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Genre</FormLabel>
                            <Select fontSize={'sm'} bg='white'>
                                <option>Select song genre</option>
                                <option>Highlife</option>
                                <option>Jazz</option>
                                <option>RnB</option>
                                <option>Afrobeat</option>
                                <option>Hip Hop</option>
                                <option>Gospel</option>
                            </Select>
                            <Text fontSize={'xs'}>You can add up to 3 genres</Text>
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Song Mood</FormLabel>
                            <Select fontSize={'sm'} bg='white'>
                                <option>What type of mood do you want your song to convey </option>
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
                            <RadioGroup onChange={handleOptionChange}>
                                <Flex gap='10'>
                                    <Box  p='5' bg='white'  borderRadius={'lg'} cursor='pointer'
                                        _hover={{ bg: '#00B0F3' }}
                                        onClick={() => handleOptionChange('1')}>
                                        <Radio display={'flex'} alignItems={'flex-start'}  value={selectedOption || '1'}>
                                            <Box >
                                                <Text fontSize={'sm'} fontWeight={'bold'}>3 Minutes - $20</Text>
                                                <Text pt={'2'} maxW={'60'} fontSize={'xs'}>Contains three verses (or two verses & a bridge), and a repeated chorus. Approx. 180 words.</Text>
                                            </Box>
                                        </Radio>
                                    </Box>
                                    <Box bg='white' p='5' borderRadius={'lg'} cursor='pointer'
                                         _hover={{ bg: '#00B0F3' }}
                                        onClick={() => handleOptionChange('2')}>
                                        <Radio display={'flex'} alignItems={'flex-start'}  value={selectedOption || '2'}>
                                            <Box >
                                                <Text fontSize={'sm'} fontWeight={'bold'}>2 Minutes - $15</Text>
                                                <Text pt='2' maxW={'60'} fontSize={'xs'}>Contains two verses and a repeated chorus. Approx. 120 words.</Text>
                                            </Box>
                                        </Radio>
                                    </Box>
                                </Flex>
                            </RadioGroup>
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