import { Box, Button, Divider, Flex, Image, Input, Progress, Select, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { AiFillGift, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const WithdrawalNigeriaLocalBank = () => {
    const navigate = useNavigate();
    const NavLink = [

        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
        { name: "Ticket", to: "/user-management-ticket" },
        { name: "Points", to: "/user-management-points" },
        { name: "Rewards", to: "/user-management-reward" },
    ]

    const PointHistoryNotification = ({ icon, message, points }: any) => {
        return (
            <Flex fontSize={'sm'} p='1' alignItems={'center'} justifyContent={'space-between'} w='full' border='1px solid #ADA8AB' borderRadius={'5px'}>
                <Flex gap='2' alignItems={'center'}>
                    {icon}
                    <Text>{message}</Text>
                </Flex>
                <Flex gap='2' alignItems={'center'}>
                    <AiFillGift color='#E9634B' />
                    <Text>{points} Points</Text>
                </Flex>
            </Flex>
        )
    }
    return (
        <Box bg='white' p='20'>
            <Flex w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap='10'>
                <Select w={['xs','xl']} bg='#E1EEF3' placeholder="Select wallet to withdraw from">
                    <option></option>
                </Select>
                <Flex w='full' flexDirection={['column','row']} py='5' justifyContent={'center'} gap='10'>

                    <Button color='white' onClick={() => navigate("/vendor/withdrawal/nigeria-local-bank")} fontWeight={'500'} py='10' w='60'>Nigerian Local Bank</Button>
                    <Button color='black' onClick={() => navigate("/vendor/withdrawal/nigeria-domically-account")} fontWeight={'500'} bg='#E1EEF3' py='10' w='60'>Nigerian domicially account</Button>
                    <Button color='black' onClick={() => navigate("/vendor/withdrawal/us-account")} fontWeight={'500'} bg='#E1EEF3' py='10' w='60'>US Account</Button>
                </Flex>
                <Flex gap='5' alignItems={'center'} flexDirection={'column'} w={['xs','xl']}>
                    <Select bg='#E1EEF3' placeholder="Select destination bank ">
                        <option></option>
                    </Select>
                    <Input bg='#E1EEF3' placeholder="Account Number" />
                    <Input bg='#E1EEF3' placeholder="Account Name" />
                    <Input bg='#E1EEF3' placeholder="Amount to withdraw" />
                    <Input bg='#E1EEF3' placeholder="Transaction fee" />
                    <Input bg='#E1EEF3' placeholder="Expected payout" />
                    <Button  w={['xs','md']}>Proceed</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default WithdrawalNigeriaLocalBank;
