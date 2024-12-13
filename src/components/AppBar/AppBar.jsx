import { useSelector } from "react-redux"
import { selectIsLogged } from "../../redux/auth/selectors"
import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';


const AppBar = () => {
    const isLogged = useSelector(selectIsLogged)
  return (
    <header className={css.wrapper}>
<Navigation />
{isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;