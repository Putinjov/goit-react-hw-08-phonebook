import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectStatusFilter, selectTasks } from 'redux/selectors';
import css from './contactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(selectTasks);
  const filter = useSelector(selectStatusFilter).toLowerCase();
  const dataNormalize = filter.toLowerCase();
  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(dataNormalize)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <ul className={css.contact__list}>
        {normalizedContacts.map(contact => (
          <li key={contact.id} className={css.contact__list__item}>
            <div className={css.contact__style}>
              <span className={css.contact__list__name}>{contact.name}</span>
              <span className={css.contact__list__number}>
                : {contact.number}
              </span>
            </div>
            < Button className={css.del__button} color="error" onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
