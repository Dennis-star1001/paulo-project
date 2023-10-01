import AfterLoginHeader from '@/components/Header/AfterLoginHeader';
import { path } from '@/routes/path';
import Cookies from 'js-cookie';
import { lazy, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BeforeLoginHeader = lazy(() => import('@/components/Header/BeforeLoginHeader'));

const AuthGuard = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      navigate(path.HOME);
    }
  }, [navigate, token]);

  return token ? <AfterLoginHeader /> : <BeforeLoginHeader />;
};

export default AuthGuard;
