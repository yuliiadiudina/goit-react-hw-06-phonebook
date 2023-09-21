import { SearchForm, SearchInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <SearchForm>
      <p>Find contacts by name</p>
      <SearchInput
        name="search"
        type="text"
        onChange={evt =>
          dispatch(setFilter(evt.currentTarget.value.toLowerCase()))
        }
      />
    </SearchForm>
  );
};
