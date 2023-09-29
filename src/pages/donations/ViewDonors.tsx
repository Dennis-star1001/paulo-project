import { Avatar, AvatarGroup, Box, Button, Checkbox, Divider, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
function ViewDonors() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const Donors = () => {
        return (
            <Flex justifyContent={'space-between'}>
                <Flex gap='2'>
                    <Avatar size='sm' name='D' />
                    <Box>
                        <Text>Nicholas Adams</Text>
                        <Text fontSize={'xs'} color='rgba(0, 176, 243, 1)'>Vendor</Text>
                    </Box>
                </Flex>
                <Box>
                    <Text>$500</Text>
                    <Text fontSize={'xs'}>2d ago</Text>
                </Box>
            </Flex>
        )
    }
    return (
        <>



            <Button as='a' bg='none' color='rgba(0, 176, 243, 1)' _hover={{ bg: 'none', cursor: 'pointer' }} fontWeight={'medium'} onClick={onOpen}>View donors</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bg={'rgba(241, 245, 249, 1)'}>
                    <Flex alignItems={'center'}>
                        <ModalHeader>
                            <Text textTransform={'uppercase'} w='80'>Make Donation</Text>
                            <Text textTransform={'uppercase'} mt='2' fontSize={'md'} fontWeight={'medium'}>Help my life, landlord wan beat me</Text>
                            <AvatarGroup gap='5'>
                                <Avatar size='xs' name="N" />
                                <Text fontWeight={'normal'} fontSize={'sm'}>Nicholas Adams</Text>
                            </AvatarGroup>
                        </ModalHeader>
                        <ModalCloseButton color='white' h='5' w='5' borderRadius={'20px'} bg='rgba(0, 176, 243, 1)' />
                    </Flex>

                    <ModalBody pt='5' pb={6}>
                        <Flex flexDirection={'column'} gap='5'>

                            <Donors />
                            <Donors />
                            <Donors />
                            <Donors />
                            <Donors />
                        </Flex>



                    </ModalBody>

                    <Box mx='10' mb='5' gap='3' alignItems={'center'} flexDirection={'column'}>
                        <Button onClick={onClose} w='full' bg='none' color='rgba(0, 176, 243, 1)' border='1px solid rgba(0, 176, 243, 1)'>Load More</Button>
                    </Box>
                    <Divider my='5' color={'gray'} />
                    <Box mx='10' mb='10' gap='3' alignItems={'center'} flexDirection={'column'}>
                        <Button onClick={onClose} w='full' bg='rgba(0, 176, 243, 1)'>Donate</Button>

                    </Box>

                </ModalContent>
            </Modal>
        </>
    )
}
export default ViewDonors;