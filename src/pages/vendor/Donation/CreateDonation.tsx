import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Select, Text, Textarea } from "@chakra-ui/react"
import React, { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
interface DataState {
    title: string;
    description: string;
    type_id: string;
    amount: string;
}
const CreateVendorDonation = () => {
    const [data, setData] = useState<DataState>({
        title: "",
        description: "",
        type_id: "",
        amount: "",
    });

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            setSelectedImage(objectURL);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(event)
        const endpointUrl = 'https://api.cleaques.com/api/vendor/donation/add';

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer 81|bvMXD0AEGCYnNzEnUIkA3xBr4TikGd9U73iAvZY9eaeaec5f`,
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({ data }),
            });


        } catch (error) {
            console.error('Error:', error);
            console.log('An error occurred while sending the request.');
        }
    };
    const padding = [4, '50px'];
    const spacing = [4, 5];
    console.log(data)
    return (
        <Flex flexDirection={['column', 'row']} bg='#0D0D0D1A' gap='10' p='10' px={padding}>
            <Box>
                <Text fontWeight={'600'}>Create Donation</Text>
                <Box w={['auto', 'sm']} h='sm' bg='#D9D9D9'>
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}

                        id="imageUploadInput"
                    />
                    {selectedImage && <img src={selectedImage} alt="Selected Image" />}
                </Box>
                <Center pt='5'>

                    <Button leftIcon={<BiSolidImageAdd size='20' />}>Add Image</Button>
                </Center>

            </Box>

            <Flex flexDirection={'column'} gap='3' w={['auto', 'sm']}>
                <FormControl>
                    <FormLabel>Donation category</FormLabel>
                    <Select bg='white'>
                        <option>Select an option</option>
                    </Select>
                </FormControl>


                <FormControl>
                    <FormLabel>Donation title</FormLabel>
                    <Input bg='white' name='title' value={data.title} onChange={handleInputChange} placeholder="Name of the your donation" />
                </FormControl>
                <FormControl>
                    <FormLabel>Donation  Description</FormLabel>
                    <Textarea bg='white' name="description" value={data.description} onChange={handleInputChange} placeholder="Add more details to your donations" />
                </FormControl>
                <FormControl>
                    <FormLabel>Donation Amount</FormLabel>
                    <Select bg='white' name="amount" value={data.amount} onChange={handleInputChange} placeholder="Starting goal for your donation">
                        <option>Select an option</option>
                    </Select>
                </FormControl>
                <Text color='#4D4D4D' fontSize={'sm'}>
                    Keep in mind that transaction fees, including credit and debit charges, are deducted from each donation.
                </Text>
                <Flex gap='5' flexDirection={'column'} pt='10'>

                    <Button bg='#00B0F3' color='white' onClick={handleSubmit}>Start Donation</Button>
                    <Button border='1px solid #00B0F3' bg='none' color='#00B0F3'>Save for later</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CreateVendorDonation