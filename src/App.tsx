import { RouterProvider } from 'react-router-dom';
import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
import { router } from './routes';

const App = () => {
  return (
    <>
      <BeforeLoginHeader />
      <RouterProvider router={router} />
      <footer>footer goes here</footer>
    </>
  );
};

export default App;
