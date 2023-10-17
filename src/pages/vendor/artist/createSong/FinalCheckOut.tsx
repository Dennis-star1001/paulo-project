import { Box, Button, Divider, Flex, FormLabel, Radio, Text } from "@chakra-ui/react"

const FinalCheckOut = () => {
    return (
        <Box bg='#F1F5F9' p='10' w='100%'>
            <Box bg='white' mx='20' py='10'>
                <Text fontSize={'xl'} textAlign={'center'}>CHECK-OUT</Text>
                <Flex  py='10'  px='10' justifyContent={'space-between'}>
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
                <Box px='20'>
                    <Divider />
                </Box>
                <Box>
                    <Box textAlign={'center'} py='10' fontSize={'sm'}>
                        <Text fontWeight={'bold'}>Total Cost: $120</Text>
                        <Text>Select the payment option you would like to use</Text>
                    </Box>
                    <Flex justifyContent={'center'}>
                        <Box pt='5'>

                            <Flex gap='10'>
                                <Box bg='#F1F5F9' p='5' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'flex-start'} value='1'>
                                        <Box >
                                            <Flex pb='2' justifyContent={'space-between'}>
                                                <Text>Snippet</Text>
                                                <Text fontSize={'sm'} fontWeight={'bold'}>3 Minutes - $20</Text>
                                            </Flex>
                                            <Text maxW={'60'} fontSize={'sm'}>Pay 30% first to hear the a 1min snippet of your song and you pay the remaining $70 when you have approve the song</Text>
                                        </Box>
                                    </Radio>
                                </Box>
                                <Box bg='#F1F5F9' p='5' borderRadius={'lg'}>
                                    <Radio display={'flex'} alignItems={'flex-start'} value='1'>
                                        <Box >
                                        <Flex pb='2' justifyContent={'space-between'}>
                                                <Text>Full Song</Text>
                                                <Text fontSize={'sm'} fontWeight={'bold'}>3 Minutes - $20</Text>
                                            </Flex>
                                            <Text maxW={'60'} fontSize={'sm'}>Pay 30% first to hear the a 1min snippet of your song and you pay the remaining $70 when you have approve the song</Text>
                                        </Box>
                                    </Radio>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>

                    <Box pt='10'>
                        <Flex gap='5' justifyContent={'center'}>
                            <Button px='10'>Back</Button>
                            <Button px='5'>Proceed to Make Payment</Button>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FinalCheckOut;