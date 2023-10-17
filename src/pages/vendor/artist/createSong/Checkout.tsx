import { Box, Button, Center, Divider, Flex, FormLabel, Input, Radio, Select, Text, Textarea } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillClipboardFill, BsMusicNoteBeamed } from "react-icons/bs"
import { Link } from "react-router-dom"

const Checkout = () => {
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
                    <Box bg='#00B0F3' p='4' borderRadius={'full'}>
                        <Box bg='white' p='1' borderRadius={'lg'}>

                        <AiFillCheckCircle color='#00B0F3' size='24' />
                        </Box>
                    </Box>
                    <Text fontSize={'sm'} position={'absolute'}>Song Type</Text>
                </Box>
          

            </Flex>
            <Box w='100%'>
                <Flex justifyContent={'center'}>
                    <Box py='10'>
                        <Text my='10' textAlign={'center'}>Complete your song order</Text>
                        <Flex gap='5'>
                                <Box bg='white' p='3' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'center'} value='1'>
                                        <Box >
                                          
                                            <Text  fontSize={'sm'}>6-Day delivery - no extra charge</Text>
                                        </Box>
                                    </Radio>
                                    </Box>
                                    <Box bg='white' p='3' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'center'} value='2'>
                                        <Box >
                                          
                                            <Text  fontSize={'sm'}>6-Day delivery - no extra charge</Text>
                                        </Box>
                                    </Radio>
                                    </Box>
                                    <Box bg='white' p='3' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'center'} value='3'>
                                        <Box >
                                          
                                            <Text  fontSize={'sm'}>6-Day delivery - no extra charge</Text>
                                        </Box>
                                    </Radio>
                                </Box>
                               
                            </Flex>
                            <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Song Mood</FormLabel>
                            <Select bg='white'>
                                <option>Streaming Platform </option>
                                <option>Email</option>
                                <option>Flash drive</option>
                               
                            </Select>
                        </Box>
                        <Center pt='10'>
                            <Flex gap='5'>
                                <Link to='/create-song/checkout'>
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

export default Checkout
