// import { RouterProvider } from 'react-router-dom';
// import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
// import Navigation from './components/Navigation/Navigation';
// import { router } from './routes';
// import BeforeLoginFooter from './components/Footer/BeforeLoginFooter';
import { GossipPage } from './features/auth';

const App = () => {
  return (
    <>
      {/* <BeforeLoginHeader />
      <Navigation />
      <RouterProvider router={router} />
      <BeforeLoginFooter /> */}
      <GossipPage/>
    </>
  );
};

export default App;
