import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage } from './pages';
import { path } from './routes/path';
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
    element: <div>Events page goes here</div>
  },
  {
    path: path.PRODUCT,
    element: <ProductPage />
  }
]);
const App = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BeforeLoginHeader />
      <RouterProvider router={router} />
      <footer>footer goes here</footer>
    </>
  );
};

export default App;
