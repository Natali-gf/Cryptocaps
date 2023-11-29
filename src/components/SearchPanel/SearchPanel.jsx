import {useDispatch, useSelector} from 'react-redux';
import s from './style.module.scss';
// import {setSearchValue} from '../../../store/slices/searchSlice';
import cn from 'classnames';
import Search from '../ui/Search/Search';
import Filters from '../ui/Filters/Filters';

export default function SearchPanel({placeholder}) {
	const dispatch = useDispatch();
	// const {searchValue} = useSelector((state) => state.search);

	return (
		<div className={s.panel}>
			<Filters />
			<Search />
		</div>
	);
}
