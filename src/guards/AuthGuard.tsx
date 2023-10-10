import { useAppSelector } from '@/app/hooks';
import { isSignedIn, isCustomer as userIsCustomer } from '@/app/slice/authSlice';
import Navigation from '@/components/Navigation/Navigation';
import DashboardHeader from '@/pages/vendor/dashboard/Header/DashboardHeader';
import Cookies from 'js-cookie';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const BeforeLoginHeader = lazy(() => import('@/components/Header/BeforeLoginHeader'));

const AuthGuard = () => {
  const isUserSignedIn = useAppSelector(isSignedIn);
  const isCustomer = useAppSelector(userIsCustomer);
  // const navigate = useNavigate();
  const token = Cookies.get('token');

  // useEffect(() => {
  //   if (!token) {
  //     navigate(path.HOME);
  //   }
  // }, [navigate, token]);

  return token ? (
    <>
      <DashboardHeader />
      {(!isUserSignedIn || isCustomer) && <Navigation />}
      <Outlet />
    </>
  ) : (
    <>
      <BeforeLoginHeader />
      {(!isUserSignedIn || isCustomer) && <Navigation />}
      <Outlet />
    </>
  );
};

export default AuthGuard;
