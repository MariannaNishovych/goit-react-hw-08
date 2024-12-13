import { FaPhone, FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';


const Contact = ({ id, name, number }) => {
  
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }
  return (
    <>
      <li className={css.item}>
        <div>
          <p>
            <FaUser />
            {name}
          </p>
          </div>

          <div>
          <p>
            <FaPhone />
            {number}
          </p>
          <button className={css.button} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default Contact;

