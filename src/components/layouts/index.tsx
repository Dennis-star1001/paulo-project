import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

export const DashboardLayout = () => {
  return (
    <Box pt={[4, '107px']} px={[4, 14]} pb='120px' bg='#f1f5f9'>
      <Outlet />
    </Box>
  );
};
