// TODO: lazy load pages components
import {
  Event_details,
  ProductPage,
  ServiceDetailPage,
  ServicePage,
  SocialDetailPage,
  SocialPage
} from '@/pages';
import { path } from './path';
import { createBrowserRouter } from 'react-router-dom';
import EventPage from '@/pages/event/Event';
import { DashboardLayout } from '@/components';
import { GossipPage } from '@/pages/gossip';
import { ServiceForm } from '@/pages/vendor/services';
import Donations from '@/pages/donations/Donations';
import DonationDetails from '@/pages/donations/DonationDetails';
import VendorEvents from '@/pages/vendor/event/Events';
import Dashboard from '@/pages/vendor/dashboard/Dashboard';
import VendorDonationPage from '@/pages/vendor/dashboard/donation/Donation';
export const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <Dashboard />
  },
  {
    path: path.CHAT,
    element: <div>Chat page goes here</div>
  },
  {
    path: path.DONATIONS,
    element: <Donations />
  },
  {
    path: path.DONATION_DETAILS,
    element: <DonationDetails />
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
  },
  {
    path: path.SOCIAL,
    element: <DashboardLayout />,
    children: [
      {
        path: path.SOCIAL,
        element: <SocialPage />
      },
      {
        path: path.SOCIAL_DETAIL,
        element: <SocialDetailPage />
      }
    ]
  },
  {
    path: path.GOSSIP,
    element: <DashboardLayout />,
    children: [
      {
        path: path.GOSSIP,
        element: <GossipPage />
      }
    ]
  },
  {
    path: path.VENDOR_SERVICE_CREATE,
    element: <ServiceForm />
  },
  {
    path: path.VENDOR_EVENTS,
    element: <VendorEvents />
  },
  {
    path: path.VENDOR_DONATION,
    element: <VendorDonationPage />
  }
]);
