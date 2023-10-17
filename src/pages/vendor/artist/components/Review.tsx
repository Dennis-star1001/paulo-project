import { Box, Flex, Image, Text } from "@chakra-ui/react"
import DummyBanner from "../../../../assets/dummy-banner.png"
import { AiFillStar } from "react-icons/ai"
const Reviews = () => {
    return (
        <Box bg='white' px='3' py='5' w='fit-content'>
            <Flex gap='2' alignItems={'center'}>
                <Image
                    borderRadius={'full'}
                    w='14'
                    h='14'
                    src={DummyBanner}
                />
                <Box>
                    <Text color='#00B0F3'>Olarenwaju Daniels </Text>
                    <Flex>
                        <AiFillStar color='#00B0F3'/>
                        <AiFillStar color='#00B0F3'/>
                        <AiFillStar color='#00B0F3'/>
                        <AiFillStar color='#00B0F3'/>
                    </Flex>
                </Box>
            </Flex>
            <Text fontSize={'sm'} maxW='60'>Lorem ipsum dolor sit amet consectetur. Rhoncus consequat suspendisse adipiscing faucibus.</Text>
        </Box>
    )
}
export default Reviews