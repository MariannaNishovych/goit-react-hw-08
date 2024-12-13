import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
// import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/filters/selectors';
// import { selectContacts } from '../../redux/contacts/selectors';
// import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {


  const filteredContacts = useSelector(selectFilteredContacts);


  return (
    <ul className={css.list}>

      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
