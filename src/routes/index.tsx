// TODO: lazy load pages components
import { DashboardLayout } from '@/components';
import AfterLoginHeader from '@/components/Header/AfterLoginHeader';
import AuthGuard from '@/guards/AuthGuard';
import {
  Event_details,
  ProductPage,
  ServiceDetailPage,
  ServicePage,
  SocialDetailPage,
  SocialPage
} from '@/pages';
import DonationDetails from '@/pages/donations/DonationDetails';
import Donations from '@/pages/donations/Donations';
import EventPage from '@/pages/event/Event';
import { GossipPage } from '@/pages/gossip';
import Dashboard from '@/pages/vendor/dashboard/Dashboard';
import VendorDonationPage from '@/pages/vendor/dashboard/donation/Donation';
import VendorEvents from '@/pages/vendor/event/Events';
import { VendorServiceForm, VendorServicePage } from '@/pages/vendor/services';
import { createBrowserRouter } from 'react-router-dom';
import { path } from './path';

export const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <AuthGuard />,
    children: [
      {
        path: path.HOME,
        element: <Dashboard />
      }
    ]
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
    element: <AuthGuard />,
    children: [
      {
        path: path.SERVICES,
        element: <ServicePage />
      }
    ]
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
    path: path.VENDOR_SERVICES,
    element: <AuthGuard />,
    children: [
      {
        path: path.VENDOR_SERVICES,
        element: <VendorServicePage />
      }
    ]
  },
  {
    path: path.VENDOR_SERVICE_CREATE,
    element: <AuthGuard />,
    children: [
      {
        path: path.VENDOR_SERVICE_CREATE,
        element: <VendorServiceForm />
      }
    ]
  },
  {
    path: path.VENDOR_EVENTS,
    element: <VendorEvents />
  },
  {
    path: path.VENDOR_DONATION,
    element: <VendorDonationPage />
  },
  {
    path: '/dashboard',
    element: <AfterLoginHeader />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
  // ...vendorRouter
]);
