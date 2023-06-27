import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../redux/filtersSlice';
import { nanoid } from 'nanoid';
import { selectStatusFilter } from 'redux/selectors';
import css from './Filter.module.css';

const filterInputId = nanoid();

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(change(e.target.value));
  };

  return (
    <div className={css['search-box']}>
      <label htmlFor={filterInputId}></label>
      <input
        className={css['filter__input']}
        id={filterInputId}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
        <button className={css['search__button']}></button>       
    </div>
  );
};
