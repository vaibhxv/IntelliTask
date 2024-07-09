import { Navigate } from 'react-router-dom';
import {
  LoginPage,
} from '../pages';

const AuthRoutes = [
  {
    path: 'login',
    element: <LoginPage />
  },
 
  {
    index: true,
    element: <Navigate to='/auth/login' />
  },
]

export default AuthRoutes;
