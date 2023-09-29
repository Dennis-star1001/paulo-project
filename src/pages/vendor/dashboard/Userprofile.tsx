// UserProfile.tsx
import React from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';

interface UserProfileProps {
  username: string;
  profileImage: string;
  type:string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, profileImage,type }) => {
  return (
    <Box display="flex" alignItems="center"  fontFamily='Lato'
    fontWeight='400' ml="4">
      <Avatar size="sm" src={profileImage} />
      <Text>

      <Text ml="2"  fontFamily='Lato'
              fontWeight='400' color="white">{username}</Text>
      <Text color="white"  fontFamily='Lato'
              fontWeight='400' ml="2">{type}</Text>
      </Text>
    </Box>
  );
};

export default UserProfile;
