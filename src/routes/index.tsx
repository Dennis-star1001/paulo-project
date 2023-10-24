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
import VendorEventLive from '@/pages/vendor/event/Eventlive';
import VendorEventDetails from '@/pages/vendor/event/Eventdetails';
import VendorCreateEvent from '@/pages/vendor/event/CreateEvent';
import { VendorServiceForm, VendorServicePage } from '@/pages/vendor/services';
import { createBrowserRouter } from 'react-router-dom';
import { path } from './path';

import Artist from '@/pages/vendor/artist/Artist';
import ArtistAddSong from '@/pages/vendor/artist/ArtistAddSong';
import ArtistDashboard from '@/pages/vendor/artist/ArtistDashboard';
import ArtistWallet from '@/pages/vendor/artist/ArtistWallet';
import ArtistSaved from '@/pages/vendor/artist/ArtistSaved';
import ArtistBooking from '@/pages/vendor/artist/ArtistBooking';
import ArtistAnalytics from '@/pages/vendor/artist/ArtistAnalytics';
import ArtistCreateAccount from '@/pages/vendor/artist/ArtistCreateAccount';
import ArtistEditProfile from '@/pages/vendor/artist/ArtistEditProfile';

import { VendorServiceDetailPage } from '@/pages/vendor/services/VendorServiceDetail';
import ArtistScreen from '@/pages/vendor/artist/ArtistScreen';
import ArtistProfile from '@/pages/vendor/artist/ArtistProfile';
import SongType from '@/pages/vendor/artist/createSong/SongType';
import SongInfo from '@/pages/vendor/artist/createSong/SongInfo';
import Checkout from '@/pages/vendor/artist/createSong/Checkout';
import FinalCheckOut from '@/pages/vendor/artist/createSong/FinalCheckOut';
import MainArtistBooking from '@/pages/vendor/artist/ArtistDonation';
import DonationUserManagement from '@/pages/UserManagement/Donation';
import PointUserManagement from '@/pages/UserManagement/Point';
import BookingUserManagement from '@/pages/UserManagement/Booking';
import RewardUserManagement from '@/pages/UserManagement/Reward/Reward';
import TicketUserManagement from '@/pages/UserManagement/Ticket';
import NigerianDomiciallyAccount from '@/pages/UserManagement/Reward/DepositeToBank/NigerianDomiciallyAccount';
import NigeriaLocalGov from '@/pages/UserManagement/Reward/DepositeToBank/NigeriaLocalGov';
import USAccount from '@/pages/UserManagement/Reward/DepositeToBank/USAccount';
import SharePoints from '@/pages/UserManagement/Reward/SharePoint/SharePoint';
import BuyMorePoints from '@/pages/UserManagement/Reward/BuyMorePoint/BuyMorePoints';
import VendorAccountChangePassword from '@/pages/vendor/AccountSettings/ChangePassword';
import VendorAccountEditProfile from '@/pages/vendor/AccountSettings/EditProfile';
import VendorAccountNotification from '@/pages/vendor/AccountSettings/Notification';
import VendorAccountSubscription from '@/pages/vendor/AccountSettings/Subscription';
import VendorDonationDetails from '@/pages/vendor/Donation/DonationDetails';
import CreateVendorDonation from '@/pages/vendor/Donation/CreateDonation';
import VendorSaveItemEvent from '@/pages/vendor/SaveItem.tsx/Event';
import VendorSaveItemBooking from '@/pages/vendor/SaveItem.tsx/Booking';
import VendorSaveItemDonation from '@/pages/vendor/SaveItem.tsx/Donation';
import VendorSaveItemPost from '@/pages/vendor/SaveItem.tsx/Post';
import WithdrawalNigeriaLocalBank from '@/pages/vendor/Withdrawal/NigerianLocalBank';
import WithdrawalNigerianDomiciallyAccount from '@/pages/vendor/Withdrawal/NigerianDomiciallyAccount';
import WithdrawalUSAccount from '@/pages/vendor/Withdrawal/USAccount';
import ArtistDonation from '@/pages/vendor/artist/ArtistDonation';

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
    path: path.ARTIST,
    element: <Artist />
  },
  {
    path: path.ARTIST_ADD_SONG,
    element: <ArtistAddSong />
  },
  {
    path: path.ARTIST_DASHBOARD,
    element: <ArtistDashboard />
  },
  {
    path: path.ARTIST_WALLET,
    element: <ArtistWallet />
  },
  {
    path: path.ARTIST_SAVED,
    element: <ArtistSaved />
  },
  {
    path: path.ARTIST_BOOKING,
    element: <ArtistBooking />
  },
  {
    path: path.ARTIST_ANALYTICS,
    element: <ArtistAnalytics />
  },
  {
    path: path.ARTIST_CREATE_ACCOUNT,
    element: <ArtistCreateAccount />
  },
  {
    path: path.ARTIST_EDIT_PROFILE,
    element: <ArtistEditProfile />
  },
  {
    path: path.ARTIST_MAIN_SCREEN,
    element: <ArtistScreen />
  },

  {
    path: path.ARTIST_PROFILE,
    element: <ArtistProfile />
  },
  {
    path:path.SONG_TYPE,
    element:<SongType/>
  },
  {
    path:path.SONG_INFO,
    element:<SongInfo/>
  },
  {
    path:path.CHECKOUT,
    element:<Checkout/>
  },
  {
    path:path.FINAL_CHECKOUT,
    element:<FinalCheckOut/>
  },
  {
    path:path.ARTIST_DONATION,
    element:<ArtistDonation/>
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
    element: <AuthGuard />,
    children: [
      {
        path: path.SERVICES_DETAIL,
        element: <ServiceDetailPage />
      }
    ]
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
    path: path.VENDOR_SERVICE_DETAIL,
    element: <AuthGuard />,
    children: [
      {
        path: path.VENDOR_SERVICE_DETAIL,
        element: <VendorServiceDetailPage />
      }
    ]
  },
  {
    path: path.VENDOR_SERVICE_EDIT,
    element: <AuthGuard />,
    children: [
      {
        path: path.VENDOR_SERVICE_EDIT,
        element: <VendorServiceForm />
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
    path: path.VENDOR_EVENT_LIVE,
    element: <VendorEventLive />
  },
  {
    path: path.VENDOR_EVENT_DETAILS,
    element: <VendorEventDetails />
  },
  {
    path: path.VENDOR_CREATE_EVENT,
    element: <VendorCreateEvent />
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
  },
  {
    path: path.DONATION_USER_MANAGEMENT,
    element: <DonationUserManagement />,
  },
  {
    path: path.POINT_USER_MANAGEMENT,
    element: <PointUserManagement />,
  },
  {
    path: path.BOOKINGS_USER_MANAGEMENT,
    element: <BookingUserManagement />
  },
  {
    path: path.REWARD_USER_MANAGEMENT,
    element: <RewardUserManagement />
  },
  {
    path: path.TICKET_USER_MANAGEMENT,
    element: <TicketUserManagement />
  },
  {
    path: path.NIGERIA_DOMICIALLY_ACCOUNT,
    element: <NigerianDomiciallyAccount />
  },
  {
    path: path.NIGERIA_LOCAL_GOVERNMENT,
    element: <NigeriaLocalGov />
  },
  {
    path: path.US_ACCOUNT,
    element: <USAccount />
  },
  {
    path: path.SHARE_POINTS,
    element: <SharePoints />
  },
  {
    path: path.BUY_MORE_POINTS,
    element: <BuyMorePoints />
  },
  {
    path: path.VENDOR_DONATION_DETAILS,
    element: <VendorDonationDetails />
  },
  {
    path: path.VENDOR_CREATE_DONATION,
    element: <CreateVendorDonation />
  },
  {
    path: path.VENDOR_SAVED_ITEM_EVENT,
    element: <VendorSaveItemEvent />
  },
  {
    path: path.VENDOR_SAVED_ITEM_BOOKING,
    element: <VendorSaveItemBooking />
  },
  {
    path: path.VENDOR_SAVED_ITEM_DONATION,
    element: <VendorSaveItemDonation />
  },
  {
    path: path.VENDOR_SAVED_ITEM_POST,
    element: <VendorSaveItemPost />
  },
  {
    path: path.VENDOR_WITHDRAWL_NIGERIA_LOCAL_BANK,
    element: <WithdrawalNigeriaLocalBank />
  },
  {
    path: path.VENDOR_WITHDRAWL_NIGERIA_DOMICALLY_ACCOUNT,
    element: <WithdrawalNigerianDomiciallyAccount />
  },
  {
    path: path.VENDOR_WITHDRAWL_US_ACCOUNT,
    element: <WithdrawalUSAccount />
  },
  {
    path: path.VENDOR_ACCOUNT_SETTINGS_EDIT_PROFILE,
    element: <VendorAccountEditProfile />
  },
  {
    path: path.VENDOR_ACCOUNT_SETTINGS_CHANEGE_PASSWORD,
    element: <VendorAccountChangePassword />
  },
  {
    path: path.VENDOR_ACCOUNT_SETTINGS_NOTIFICATION,
    element: <VendorAccountNotification />
  },
  {
    path: path.VENDOR_ACCOUNT_SETTINGS_SUBSCRIPTION,
    element: <VendorAccountSubscription />
  },
  {
    path: path.ARTIST_MAIN_SCREEN,
    element: <ArtistScreen />
  },

  {
    path: path.ARTIST_PROFILE,
    element: <ArtistProfile />
  },
  {
    path:path.SONG_TYPE,
    element:<SongType/>
  },
  {
    path:path.SONG_INFO,
    element:<SongInfo/>
  },
  {
    path:path.CHECKOUT,
    element:<Checkout/>
  },
  {
    path:path.FINAL_CHECKOUT,
    element:<FinalCheckOut/>
  },
  {
    path:path.ARTIST_BOOKING,
    element:<ArtistBooking/>
  }

  // ...vendorRouter
]);
