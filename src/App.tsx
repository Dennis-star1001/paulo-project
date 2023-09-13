import { RouterProvider } from 'react-router-dom';
import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
import Navigation from './components/Navigation/Navigation';
import { router } from './routes';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <BeforeLoginHeader />
      <Navigation/>
      <RouterProvider router={router} />
      <Box as='footer'>footer goes here</Box>
    </>
  );
};

export default App;
