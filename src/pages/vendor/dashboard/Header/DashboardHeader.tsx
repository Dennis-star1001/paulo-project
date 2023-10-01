import '/node_modules/flag-icons/css/flag-icons.min.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsShop } from 'react-icons/bs';
import { SlPeople } from 'react-icons/sl';
import { BsChevronDown } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import dashboardlogo from '../../../../assets/dashboardlogo.svg';
import addCircle from '../../../../assets/add-circle.svg';

import UserProfile from '../Userprofile';

import {
  Box,
  Link,
  Text,
  Flex,
  Image,
  Button,
  chakra,
  Spacer,
  IconButton,
  useDisclosure,
  Avatar,
  useMediaQuery
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { path } from '@/routes/path';
import { logoutAction, selectUser, userRole } from '@/app/slice/authSlice';

interface NavLink {
  link: string;
  icon: JSX.Element;
  name: string;
}
interface DashboardLink {
  link: string;
  name: string;
}

const DashboardHeader: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  return (
    <chakra.header id='header'>
      <Box>{isMobile ? <MobileView /> : isTablet ? <MobileView /> : <DesktopView />}</Box>
    </chakra.header>
  );
};

const mobileLinks: DashboardLink[] = [
  { name: ' Services Wallet', link: '/shop' },
  { name: 'Events Wallet', link: '/social' },
  { name: 'Donation Wallet', link: '/chat' }
];

const navLinks: NavLink[] = [
  { name: ' Dashboard', link: '/shop', icon: <BsShop /> },
  { name: 'Social', link: '/social', icon: <SlPeople /> },
  { name: 'Chat', link: '/chat', icon: <BiChat /> }
];

const DesktopView = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const role = useAppSelector(userRole);

  return (
    <>
      <Flex alignItems='center' justify='space-around' maxW='1920px' h='124px' bg='#212529' p='6'>
        <Box display='flex' alignItems='center'>
          <Link href='/home' display='flex' alignItems='center' textDecoration='none'>
            <Image
              src='https://generation-sessions.s3.amazonaws.com/748f748c525335ed31db362685342e09/img/image-32@2x.png'
              alt='logo'
              bg='#212529'
              w='290px'
              h='44.86px'
            />
          </Link>
        </Box>

        <Spacer />

        <Box display='flex' alignItems='center' color='white' maxW='875px' h='48px' ml='6'>
          {navLinks.map((navLink, i) => (
            <Link
              href={navLink.link}
              key={`navlink_${i}`}
              display='flex'
              alignItems='center'
              color='white'
              mr='55'
              fontFamily='Lato'
              fontWeight='400'
              fontSize='24px'
              h='36.13px'
            >
              {navLink.icon} <Text ml='1'>{navLink.name}</Text>
            </Link>
          ))}
          <Box display='flex' alignContent='center' color='#E6E7E8' borderRadius='50px'>
            <Box w='48px' h='33px' fontSize='24px'>
              <span className='fi fi-ng fis'></span>
            </Box>
            <Box fontFamily='Lato' fontWeight='600' fontSize='24px' lineHeight='34.5px'>
              <Flex>
                NGN
                <BsChevronDown />
              </Flex>
            </Box>
          </Box>
        </Box>

        <Spacer />

        <Box display='flex' alignItems='center'>
          <IconButton
            aria-label='Search database'
            bg='balck'
            mr='4'
            icon={<BsBell fontSize='25' w='24px' h='24px' color='#00B0F3' />}
          />

          <UserProfile username={user?.email} type={role} profileImage='url_to_profile_image.jpg' />
          <Menu>
            <MenuButton as={Button} border='none' background='none'>
              <RiArrowDropDownLine />
            </MenuButton>
            <MenuList border='none' bg='#FFFFFF' p='1rem'>
              <MenuItem border='none' bg='#FFFFFF' minH='48px'>
                <span>Switch User</span>
              </MenuItem>
              <MenuItem border='none' bg='#FFFFFF' minH='48px'>
                <span>Saved items</span>
              </MenuItem>
              <MenuItem border='none' bg='#FFFFFF' minH='48px'>
                <span>Vendor Management</span>
              </MenuItem>
              <MenuItem border='none' bg='#FFFFFF' minH='48px'>
                <span>Account settings</span>
              </MenuItem>
              <MenuItem border='none' bg='#FFFFFF' minH='40px'></MenuItem>
              <MenuItem
                border='none'
                bg='#FFFFFF'
                minH='40px'
                onClick={() => {
                  dispatch(logoutAction());
                  location.href = path.HOME;
                }}
              >
                <span>Log Out</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

const MobileView = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <>
      <Box display='flex' alignItems='center' bg='white' h='79px' p='4'>
        <IconButton
          bg='white'
          onClick={onToggle}
          icon={
            isOpen ? (
              <GrClose fontSize='xl' color='#212529' h={24} />
            ) : (
              <GiHamburgerMenu fontSize='xl' color='#212529' h={24} />
            )
          }
          aria-label={'Toggle Navigation'}
        />

        <Box>
          <Link href='/home'>
            <Image src={dashboardlogo} alt='logo' w='24px' h='28px' />
          </Link>
        </Box>
        <Spacer />
        <Box display='flex' alignItems='center' gap='1'>
          <Image src={addCircle} alt='addCircle' w='24px' h='28px' />
          <Box as={BsBell} fontSize='xl' mr='4' w='24px' h='24px' color='#00B0F3' />
          <Avatar size='sm' />
        </Box>
      </Box>
      <Box display={isOpen ? 'flex' : 'none'} flexDirection='column' p='2'>
        {mobileLinks.map((navLink, i) => (
          <Link
            href={navLink.link}
            key={`navlink_${i}`}
            display='flex'
            alignItems='center'
            color='#212529'
            fontFamily='Lato'
            fontSize='16px'
            h='36.13px'
          >
            <Text ml='1'>{navLink.name}</Text>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default DashboardHeader;
