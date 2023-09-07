import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage, ServicePage } from './pages';
import { path } from './routes/path';
import { Box } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <div>Home page goes here</div>
  },
  {
    path: path.CHAT,
    element: <div>Chat page goes here</div>
  },
  {
    path: path.DONATIONS,
    element: <div>Donation page goes here</div>
  },
  {
    path: path.SHOP,
    element: <div>Shop page goes here</div>
  },
  {
    path: path.EVENTS,
    element: <div>Events page goes here</div>
  },
  {
    path: path.PRODUCT,
    element: <ProductPage />
  },
  {
    path: path.SERVICE,
    element: <ServicePage />
  }
]);
const App = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header>Navbar goes here</header>
      <RouterProvider router={router} />
      <Box as='footer'>footer goes here</Box>
    </>
  );
};

export default App;
