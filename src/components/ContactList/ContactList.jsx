import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectTasks, selectStatusFilter } from 'redux/selectors';
import { deleteContact } from 'components/api/api';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectTasks);
  const filter = useSelector(selectStatusFilter);
  console.log(contacts)
      console.log(filter)

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <ul className={'contacts-list'}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={'contacts-item'}>
              <span>{contact.name} : </span>
              <span>{contact.number} </span>
              <Button
          size='small'
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
            </li>
          ))}
        </ul>
    </div>
  );
};


