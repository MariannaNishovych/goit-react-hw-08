
import { useSelector } from 'react-redux'
import { selectIsLogged } from '../redux/auth/selectors'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirect = '/' }) => {
    const isLoggedIn = useSelector(selectIsLogged);

  return isLoggedIn ? Component : <Navigate to={redirect} />;

}

export default PrivateRoute;