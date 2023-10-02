import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { isSignedIn } from './app/slice/authSlice';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './pages/vendor/dashboard/Dashboard';
import { router } from './routes';

const App = () => {
  const isUserSignedIn = useAppSelector(isSignedIn);
  // const pathname = useLocation().pathname;
  // const isDashboard = pathname.includes('dashboard');

  return (
    <>
      {/* <BeforeLoginHeader /> */}
      {!isUserSignedIn && <Navigation />}
      <Suspense fallback={<>loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
      <>
        <Dashboard />
        {/* <Services/> */}
        {/* <Donation/> */}
        {/* <Analytics/> */}
        {/* <Events/> */}
        {/* <EventDetails/> */}
        {/* <EventLive/> */}
        {/* <CreateEvent/> */}
      </>
    </>
  );
};

export default App;
