import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
// import clsx from 'clsx';

const AuthNav = () => {

  const setActive = ({ isActive }) =>
    isActive ? css.active : css.noActive;
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink className={setActive} to="/login">
          Login
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={setActive} to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;