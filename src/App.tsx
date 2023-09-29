import { RouterProvider } from 'react-router-dom';
import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
import Navigation from './components/Navigation/Navigation';
import { router } from './routes';
import BeforeLoginFooter from './components/Footer/BeforeLoginFooter';
import Dashboard from './pages/vendor/dashboard/Dashboard';
import Services from './pages/vendor/dashboard/services/Services';
import Donation from './pages/vendor/dashboard/donation/Donation';
import Analytics from './pages/vendor/dashboard/analysis/Analytics';
import Events from './pages/vendor/event/Events';
import EventDetails from './pages/vendor/event/Eventdetails';
import EventLive from './pages/vendor/event/Eventlive';
import CreateEvent from './pages/vendor/event/createEvent';

const App = () => {
  return (
    <>
      {/* <BeforeLoginHeader />
      <Navigation />
      <RouterProvider router={router} />
      <BeforeLoginFooter /> */}
      <>
        <Dashboard/>
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
