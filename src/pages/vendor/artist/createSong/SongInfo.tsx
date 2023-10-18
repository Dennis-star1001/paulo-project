import { Box, Button, Center, Divider, Flex, FormLabel, Input, Radio, Select, Text, Textarea, IconButton } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillClipboardFill, BsMusicNoteBeamed } from "react-icons/bs"
import { Link } from "react-router-dom"
import React, { useRef } from 'react';
import { MdAdd } from "react-icons/md";
import AfterLoginHeader from "@/components/Header/AfterLoginHeader";

const SongInfo = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const handleAddClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            // Handle the selected file here (e.g., upload or process it)
            console.log("Selected file:", selectedFile);
        }
    };

    return (
        <Box  bg='#F1F5F9'>
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
                        <Text fontSize={'sm'} mt='10' textAlign={'center'}>Give the artist information on how you  want your song structured<br></br> and the details needed in your song </Text>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Song From?</FormLabel>
                            <Input fontSize={'sm'} placeholder="Who is the song from" bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Who is the song to?</FormLabel>
                            <Input fontSize={'sm'} placeholder="Who is the artist writing the song to?" bg='white' />
                        </Box>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Occasion</FormLabel>
                            <Input fontSize={'sm'} placeholder="What is the reason for the song e.g Wedding anniversary" bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Story for the artist to tell</FormLabel>
                            <Textarea bg='white' />
                        </Box>

                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Important Information</FormLabel>
                            <Input placeholder="What are the things that are compulsory for the artist to mention" fontSize={'sm'} bg='white' />
                        </Box>
                        <Box pt='10'>
                            <FormLabel fontWeight={'bold'}>Add Photo</FormLabel>


                            <Flex bg='white' w='full' justifyContent='space-between'>
                                <Input
                                    type="file"
                                    display="none"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                                <IconButton
                                    icon={<MdAdd />}
                                    onClick={handleAddClick}
                                    variant="outline"
                                    bg="white"
                                    float={'right'}
                                />
                            </Flex>
                        </Box>
                        <Center pt='10'>
                            <Flex gap='5'>
                                <Link to='/create-song/song-type'>
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
