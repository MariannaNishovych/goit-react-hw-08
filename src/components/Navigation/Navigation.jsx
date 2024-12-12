import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";
import clsx from "clsx";



const Navigation = () => {

    const isLoggedIn = useSelector(selectIsLogged);

    const setClass = ({ isActive}) => {
        return clsx(css.link, isActive && css.active);
    }

    return (
      <div>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink className={setClass} to="/">
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={css.item}>
              <NavLink className={setClass} to="/contacts">
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    );
}

export default Navigation