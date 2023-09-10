<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Event_details, ProductPage, ServicePage } from './pages';
import EventPage from './pages/event/Event';
import { path } from './routes/path';
import { Box } from '@chakra-ui/react';

import BeforeLoginHeader from './components/Header/BeforeLoginHeader';

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
    element: <EventPage/>
  },
  {
    path: path.EVENTS_DETAILS,
    element: <Event_details/>
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
=======
import { RouterProvider } from 'react-router-dom';
import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
import { router } from './routes';
import { Box } from '@chakra-ui/react';

>>>>>>> 67b990445184d0224cdf35d666061d75ca97fe33
const App = () => {
  return (
    <>
      <BeforeLoginHeader />
      <RouterProvider router={router} />
      <Box as='footer'>footer goes here</Box>
    </>
  );
};

export default App;
