import { NavLink } from 'react-router-dom'
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={css.container}>
        <p className={css.text}>Sorry, but this page was not found...</p>
        <NavLink to='/'>Go Home</NavLink>
    </div>
  )
}

export default NotFoundPage;