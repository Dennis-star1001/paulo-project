import { useAppSelector } from '@/app/hooks';
import { isVendor } from '@/app/slice/authSlice';
import DashboardHeader from '@/pages/vendor/dashboard/Header/DashboardHeader';
import Cookies from 'js-cookie';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const BeforeLoginHeader = lazy(() => import('@/components/Header/BeforeLoginHeader'));

const AuthGuard = () => {
  // const navigate = useNavigate();
  const token = Cookies.get('token');
  const userIsVendor = useAppSelector(isVendor);

  // useEffect(() => {
  //   if (!token) {
  //     navigate(path.HOME);
  //   }
  // }, [navigate, token]);

  return token ? (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  ) : (
    <>
      <BeforeLoginHeader />
      <Outlet />
    </>
  );
};

export default AuthGuard;
