import { Box, Text, InputLeftElement, InputRightElement, Flex, Input, InputGroup, Button, Link } from '@chakra-ui/react'
import { CgSortAz } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'


interface NavLinks {
    link: string;
    name: string;
}

const NavigationLinks: NavLinks[] = [
    { name: 'Services', link: '/services' },
    { name: 'Donations', link: '/donations' },
    { name: 'Events', link: '/events' },
    { name: 'Rewards', link: '/rewards' },
    { name: 'Airtime/Data', link: '/paycom' },
]


const Navigation = () => {
    return (
        <Box bg='#E9634B' fontFamily='Lato' color='#FFFFFF' h='150px' mt='6'>
            <Flex w="100%" h="55px" gap="18px" py="8" px="4" justifyContent="center">
                <Box w="48px" h="48px" mt='-1'>
                    <CgSortAz fontSize="40" />
                </Box>
                <Text fontSize="24px" fontWeight="600" textTransform="uppercase" lineHeight="34.5px">
                    Browse category
                </Text>
                <Box w="100%" maxW="864px" h="55px" borderRadius="4px">
                    <InputGroup boxShadow="none">
                        <InputLeftElement pointerEvents="none">
                            <AiOutlineSearch fontSize="20" color="#4D4D4D" />
                        </InputLeftElement>
                        <Input placeholder="Search for products, events or services" bg="#FFFFFF" fontSize='16px' lineHeight='24px' fontWeight='600' color='#ADA8AB' />
                        <InputRightElement width="auto">
                            <Button
                                borderRadius="0 4px 4px 0"
                                bg="#00B0F3"
                                color="#4D4D4D"
                                p='12px, 18px, 12px, 18px'
                            >
                                <Text fontFamily='Open Sans' fontWeight='400' fontSize='14px' lineHeight='33.5px' align='center' color='#F8FAFC'>Search</Text>
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Flex>
            <Box w='901px' h='35px' display="flex" justifyContent="center" my='6' mx='450'>
                {NavigationLinks.map((NavigationLink, i) => (
                    <Link href={NavigationLink.link} key={`NavigationLink_${i}`} justifyContent='space-around'>
                        <Box
                            m='4'
                            display='inline-flex'
                            alignItems='center'
                            color='#FFFFFF'
                            fontFamily='Lato'
                            fontWeight='600'
                            fontSize='24px'
                            lineHeight='34.5px'
                            textTransform='uppercase'
                        >
                            {NavigationLink.name}
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box >
    )
}

export default Navigation