import { ReactNode } from 'react'
import {
    Box,
    Flex,
    Stack,
    Image,
    Link,
    Text,
    Input,
    Button,
    Container,
    InputGroup,
    SimpleGrid,
    InputLeftElement,
    InputRightElement,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react'
import AppStoreBadge from '../../assets/AppStoreBadge.png'
import PlayStoreBadge from '../../assets/PlayStoreBadge.png'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { LuSend } from 'react-icons/lu'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneOutgoing } from 'react-icons/bi'
import { color } from 'framer-motion'
const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const BeforeLoginFooter = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'}  >
                        {/* <ListHeader>Company</ListHeader> */}
                        <Box as="a" href={'#'} _hover={{ color: '#E9634B' }} >
                            Home
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: '#E9634B' }}>
                            Sell
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: '#E9634B' }}>
                            About
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: '#E9634B' }}>
                            Contact
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: '#E9634B' }}>
                            Blog
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: '#E9634B' }}>
                            Signup
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        {/* <ListHeader >Discover</ListHeader> */}
                        <Box fontFamily={'Lato'} fontWeight={'600'} fontSize={'24px'} lineHeight={'34.5px'} textTransform={'uppercase'}>Discover</Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Shop
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Products
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Find services
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Find events
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Box fontFamily={'Lato'} fontWeight={'600'} fontSize={'24px'} lineHeight={'34.5px'}
                            textTransform={'uppercase'}>Become a seller</Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Features and
                            Pricing
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Set up an account
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Learn
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            FAQ
                        </Box>
                        <Box as="a" href={'#'} fontFamily={'Open Sans'} fontWeight={'400'} fontSize={'16px'} lineHeight={'28.08px'} color={'#201E1F'} _hover={{ color: '#E9634B' }}>
                            Seller Login
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Box >
                            <Box fontFamily={'Lato'} fontWeight={'620'} fontSize={'22px'} lineHeight={'34.5px'}
                                textTransform={'uppercase'}>Join The Community!</Box>
                            <InputGroup boxShadow='none' my='2'>
                                <InputLeftElement pointerEvents='none'>
                                </InputLeftElement>
                                <Input placeholder='Enter your mail' color={'#black'}/>
                                <InputRightElement>
                                    <Button
                                        bg='#E9634B'
                                    >
                                        <LuSend />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Box>
                            <Box display='flex' justifyContent='space-between' gap='2'>
                                <Box>
                                    <Text fontFamily={'Lato'} fontWeight={'600'} fontSize={'24px'} lineHeight={'34.5px'}
                                        textTransform={'uppercase'} my='2'>Reach Out</Text>
                                    <Box>
                                        <Link href='#' _hover={{ color: '#E9634B' }}>
                                            <Flex align="center" mt='1'>
                                                <BiPhoneOutgoing color='#E9634B' />
                                                <Text ml={2} fontFamily={'Open Sans'} fontWeight={'600'} fontSize={'16px'} lineHeight={'24.08px'}>+(274) 931-7982</Text>
                                            </Flex>
                                        </Link>
                                        <Link href='#' _hover={{ color: '#E9634B' }}>
                                            <Flex align="center" mt='4' >
                                                <AiOutlineMail color='#E9634B' />
                                                <Text ml={2} fontFamily={'Open Sans'} fontWeight={'600'} fontSize={'16px'} lineHeight={'24.08px'}>contact@cleaques.com</Text>
                                            </Flex>
                                        </Link>
                                    </Box>
                                </Box>
                                <Box my='6' h='80.5px' w='80.5px'>
                                    <Image src='https://c.animaapp.com/TMCTLQAp/img/image-42@2x.png' />
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    {/* <Text fontSize='30px'>Install App</Text> */}
                    <Link href='#' >
                        <Image
                            src={AppStoreBadge}
                            alt='logo'
                            h={'80px'}
                            w='180px'
                        />
                    </Link>
                    <Link href='#' >
                        <Image
                            src={PlayStoreBadge}
                            alt='logo'
                            h={'120px'}
                            w='220px'
                        />
                    </Link>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default BeforeLoginFooter










