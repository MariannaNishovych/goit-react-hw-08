import { useSelector } from "react-redux"
import { selectIsLogged } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom";


const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLogged);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;