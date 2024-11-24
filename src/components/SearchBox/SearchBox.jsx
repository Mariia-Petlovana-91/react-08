import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter} from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export default function SearchBox() {

      const selectNameFilter = useSelector(selectFilter);
      const dispatch = useDispatch();

      function onChangeValue(e) {
           const action = changeFilter(e.target.value);
           dispatch(action);
      }
	return (
		<div className={css.search__box}>
			<input className={css.input}
				type='text'
				name='search'
				value={selectNameFilter}
				onChange={onChangeValue}
				placeholder='Find by name'
			/>
		</div>
	)
}