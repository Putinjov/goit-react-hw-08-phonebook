import { useDispatch, useSelector } from 'react-redux';
import { query } from 'redux/sliceFilter';
import { selectStatusFilter } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';


const filterInputId = nanoid();

export const Filter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();
  return (
    <div className='filter'>
      <label htmlFor={filterInputId}>Filter contacts: </label>
      <input
        className='filter-input'
        type="text"
        id="filter"
        value={filter}
        onChange={(evt) => {
          dispatch(query(evt.target.value.trim()));
        }}
        placeholder="Find contacts by name"
      />
    </div>
  );
};
