
import { useSelector } from 'react-redux'
import { selectIsLogged } from '../redux/auth/selectors'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLogged); 
  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;