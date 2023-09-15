import { Event_details, ProductPage, ServiceDetailPage, ServicePage } from '@/pages';
import { path } from './path';
import { createBrowserRouter } from 'react-router-dom';
import EventPage from '@/pages/event/Event';
export const router = createBrowserRouter([
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
    path: path.PRODUCT,
    element: <ProductPage />
  },
  {
    path: path.SERVICES,
    element: <ServicePage />
  },
  {
    path: path.SERVICES_DETAIL,
    element: <ServiceDetailPage />
  },
  {
    path: path.EVENTS,
    element: <EventPage />
  },
  {
    path: path.EVENTS_DETAILS,
    element: <Event_details />
  }
]);
