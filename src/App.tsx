import { RouterProvider } from 'react-router-dom';
import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
import Navigation from './components/Navigation/Navigation';
import { router } from './routes';
import BeforeLoginFooter from './components/Footer/BeforeLoginFooter';

const App = () => {
  return (
    <>
      <BeforeLoginHeader />
      <Navigation />
      <RouterProvider router={router} />
      <BeforeLoginFooter />
    </>
  );
};

export default App;
