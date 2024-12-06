import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
import clsx from 'clsx'

const AuthNav = () => {

    const setClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    }

  return (
    <div className={css.authContainer}>
<NavLink className={setClass} to='/register'>
Register
</NavLink>
<NavLink className={setClass} to='/login'>
Log In
</NavLink>
    </div>
  );
};

export default AuthNav;