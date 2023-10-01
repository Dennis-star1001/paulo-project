import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { isCustomer, isSignedIn, selectUser } from './app/slice/authSlice';
import Navigation from './components/Navigation/Navigation';
import { router } from './routes';
// import Dashboard from './pages/vendor/dashboard/Dashboard';
// import Services from './pages/vendor/dashboard/services/Services';
// import Donation from './pages/vendor/dashboard/donation/Donation';
// import Analytics from './pages/vendor/dashboard/analysis/Analytics';
// import VendorEvents from './pages/vendor/event/Events';
// import EventDetails from './pages/vendor/event/Eventdetails';
// import EventLive from './pages/vendor/event/Eventlive';
// import CreateEvent from './pages/vendor/event/createEvent';

const App = () => {
  const user = useAppSelector(selectUser);
  const userIsCustomer = useAppSelector(isCustomer);
  const userIsVendor = useAppSelector(isCustomer);
  const isUserSignedIn = useAppSelector(isSignedIn);
  const isCustomerSignedIn = isUserSignedIn && userIsCustomer;
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
