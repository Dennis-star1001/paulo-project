import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

export const DashboardLayout = () => {
  return (
    <Box pt='107px' px={[4, '230px']} pb='120px' bg='#f1f5f9'>
      <Outlet />
    </Box>
  );
};
