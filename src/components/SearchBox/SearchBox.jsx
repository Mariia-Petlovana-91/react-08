import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import filtersModule from '../../redux/filters/slice';
import selectFilter from '../../redux/filters/selectors';

export default function SearchBox() {

      const selectNameFilter = useSelector(selectFilter);
      const dispatch = useDispatch();

      function onChangeValue(e) {
           const action = filtersModule.changeFilter(e.target.value);
           dispatch(action);
      }
	return (
		<div className={css.search__box}>
			<input className="input"
				type='text'
				name='search'
				value={selectNameFilter}
				onChange={onChangeValue}
				placeholder='Find contacts by name'
			/>
		</div>
	)
}