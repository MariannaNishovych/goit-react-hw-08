import css from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList'
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/contacts/selectors'
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {

    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
  return (
    <div className={css.container}>
<ContactForm />
<SearchBox />
{loading && <Loader />}
{error && <p>Something went wrong..</p>}
<ContactList />
    </div>
  )
}

export default ContactsPage;