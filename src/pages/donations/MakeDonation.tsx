import { Avatar, AvatarGroup, Button, Checkbox, Divider, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
function MakeDonation() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>

            <Button onClick={onOpen} w='fit-content'>Donate Again</Button>


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

                    <ModalBody pb={6}>
                        <Flex pb='5' justifyContent={'space-between'}>
                            <Text fontWeight={'medium'} fontSize={'sm'}>Donate as anonymous </Text>
                            <Checkbox defaultChecked />
                        </Flex>
                        <Input bg='white' ref={initialRef} placeholder='Amount' _placeholder={{color:'rgba(173, 168, 171, 1)'}} />

                        <Divider color='gray' my='5' />
                        <Text fontWeight={'medium'} fontSize={'sm'}>Billing Information</Text>
                        <Flex pt='5' flexDirection={'column'} gap='3'>
                            <Input bg='white' ref={initialRef} placeholder='Email Address' _placeholder={{color:'rgba(173, 168, 171, 1)'}}/>
                            <Input bg='white' ref={initialRef} placeholder='Phone Number' _placeholder={{color:'rgba(173, 168, 171, 1)'}}/>
                            <Input bg='white' ref={initialRef} placeholder='Address' _placeholder={{color:'rgba(173, 168, 171, 1)'}}/>
                            <Input bg='white' ref={initialRef} placeholder='Zip Code (optinal)' _placeholder={{color:'rgba(173, 168, 171, 1)'}}/>
                        </Flex>



                    </ModalBody>
                    <Divider my='5' color={'gray'} />
                   
                        <Flex mx='10' mb='10' gap='3' alignItems={'center'} flexDirection={'column'}>
                            <Button onClick={onClose} w='full' bg='rgba(0, 176, 243, 1)'>Check out $1,420.00</Button>
                            <Text>Or</Text>
                            <Button onClick={onClose} w='full' bg='rgba(233, 99, 75, 1)'>Pay with point</Button>
                        </Flex>
                    
                </ModalContent>
            </Modal>
        </>
    )
}
export default MakeDonation;