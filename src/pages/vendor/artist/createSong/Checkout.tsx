import { Box, Button, Center, Divider, Flex, FormLabel, Input, Radio, Select, Text, Textarea } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillClipboardFill, BsMusicNoteBeamed } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"
import AfterLoginHeader from "@/components/Header/AfterLoginHeader"

const Checkout = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);

    };
    return (
        <Box bg='#F1F5F9'>
          <AfterLoginHeader />
            <Text py='10' fontSize={'3xl'} textAlign={'center'}>Tell us how to create a song for you</Text>
            <Flex mt='5' justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Box bg='#00B0F3' p='2' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <BsMusicNoteBeamed color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} fontWeight={'bold'} position={'absolute'}>Song Type</Text>
                </Box>
                <Divider w='24' orientation="horizontal" />
                <Box>
                    <Box bg='#00B0F3' p='2' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <BsFillClipboardFill color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} fontWeight={'bold'} position={'absolute'}>Song Info</Text>
                </Box>
                <Divider w='24' orientation="horizontal" />
                <Box>
                    <Box bg='#00B0F3' border='1px solid #00B0F3' p='2' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                            <AiFillCheckCircle color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} fontWeight={'bold'} position={'absolute'}>Checkout</Text>
                </Box>

            </Flex>
            <Box w='100%'>
                <Flex justifyContent={'center'}>
                    <Box py='10' >
                        <Text my='10' fontSize={'sm'} textAlign={'center'}>Complete your song order</Text>
                        <Text py='2' fontWeight={'bold'} fontSize={'sm'}>Delivery Period</Text>
                        <Flex gap='5'>
                            <Box bg='white' p='3' borderRadius={'lg'} _hover={{ bg: '#00B0F3' }}
                                onClick={() => handleOptionChange('1')}>
                                <Radio display={'flex'} alignItems={'center'} value={selectedOption || '1'}>
                                    <Box >

                                        <Text fontSize={'xs'}>6-Day delivery - no extra charge</Text>
                                    </Box>
                                </Radio>
                            </Box>
                            <Box bg='white' p='3' borderRadius={'lg'} _hover={{ bg: '#00B0F3' }}
                                onClick={() => handleOptionChange('2')}>
                                <Radio display={'flex'} alignItems={'center'} value={selectedOption || '2'}>
                                    <Box >

                                        <Text fontSize={'xs'}>4-Days delivery - + $30</Text>
                                    </Box>
                                </Radio>
                            </Box>
                            <Box bg='white' p='3' borderRadius={'lg'} _hover={{ bg: '#00B0F3' }}
                                onClick={() => handleOptionChange('3')}>
                                <Radio display={'flex'} alignItems={'center'} value={selectedOption || '3'}>
                                    <Box >

                                        <Text fontSize={'xs'}>2-Days delivery - + $60</Text>
                                    </Box>
                                </Radio>
                            </Box>

                        </Flex>
                        <Center>
                            <Box pt='10' w='lg'>
                                <FormLabel fontWeight={'bold'}>Delivery Method</FormLabel>
                                <Select fontSize={'sm'} bg='white'>
                                    <option>Streaming Platform </option>
                                    <option>Email</option>
                                    <option>Flash drive</option>

                                </Select>
                            </Box>
                        </Center>
                        <Center pt='10'>
                            <Flex gap='5'>
                                <Link to='/create-song/song-info'>
                                    <Button px='10'>Back</Button>
                                </Link>
                                <Link to='/create-song/final-checkout'>
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

export default Checkout
