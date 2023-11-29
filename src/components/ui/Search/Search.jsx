import {useDispatch, useSelector} from 'react-redux';
import s from './style.module.scss';
// import {setSearchValue} from '../../../store/slices/searchSlice';
import cn from 'classnames';
import BorderBlock from '../tags/BorderBlock/BorderBlock';

export default function Search({placeholder, isAdmin}) {
	const dispatch = useDispatch();
	// const {searchValue} = useSelector((state) => state.search);

	return (
		<BorderBlock className={cn(s.search, {[s.search_main]: !isAdmin})}>
			<input
				className={
					isAdmin
						? cn(s.search__input)
						: cn(s.search__input, s.search__input_main)
				}
				id={'search'}
				type={'text'}
				placeholder={placeholder || 'Search...'}
				// value={searchValue}
				// onChange={(e) => dispatch(setSearchValue(e.target.value))}
			/>
			<label
				className={
					isAdmin
						? cn(s.search__label, 'icon_search')
						: cn(s.search__label, s.search__label_main, 'icon_search_second')
				}
				htmlFor='search'
			/>
		</BorderBlock>
	);
}
