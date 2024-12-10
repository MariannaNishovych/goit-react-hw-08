import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {

    const dispatch= useDispatch();
    const user = useSelector(selectUser);

  return (
    <div className={css.container}>
        <h2 className={css.title}>Welcome, {user.name}!</h2>
        <button className={css.btn} type='submit'
        onClick={() => dispatch(logOut())}>
              Logout
              </button>
    </div>
  )
};

export default UserMenu;