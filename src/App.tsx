import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => {
  return (
    <>
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
