import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
// import clsx from 'clsx';

const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;