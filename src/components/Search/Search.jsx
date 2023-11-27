import {useDispatch, useSelector} from 'react-redux';
import s from './style.module.scss';
// import {setSearchValue} from '../../../store/slices/searchSlice';
import cn from 'classnames';

export default function Search({placeholder}) {
	const dispatch = useDispatch();
	// const {searchValue} = useSelector((state) => state.search);

	return (
		<div className={s.search}>
			<input
				className={s.search__input}
				id={'search'}
				type={'text'}
				placeholder={placeholder || 'Поиск'}
				// value={searchValue}
				// onChange={(e) => dispatch(setSearchValue(e.target.value))}
			/>
			<label className={cn(s.search__label, 'icon_search')} htmlFor='search' />
		</div>
	);
}
