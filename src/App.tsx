import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { isCustomer as userIsCustomer, isSignedIn } from './app/slice/authSlice';
import Navigation from './components/Navigation/Navigation';
import { router } from './routes';

const App = () => {
  const isUserSignedIn = useAppSelector(isSignedIn);
  const isCustomer = useAppSelector(userIsCustomer);

  return (
    <>
      {(!isUserSignedIn || isCustomer) && <Navigation />}
      <Suspense fallback={<>loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
      <>
        {/* <Dashboard /> */}
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
