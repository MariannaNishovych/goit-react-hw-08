
import { useSelector } from 'react-redux'
import { selectIsLogged } from '../redux/auth/selectors'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLogged); 
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

