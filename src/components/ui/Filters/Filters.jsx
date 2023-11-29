import {useDispatch, useSelector} from 'react-redux';
import s from './style.module.scss';
// import {setSearchValue} from '../../../store/slices/searchSlice';
import cn from 'classnames';
import BorderBlock from '../tags/BorderBlock/BorderBlock';

export default function Filters({placeholder, isAdmin}) {
	const dispatch = useDispatch();
	// const {searchValue} = useSelector((state) => state.search);

	return (
		<BorderBlock className={cn(s.filters)}>
			<div className={cn(s.filters__text, 'icon_params')}>Show Filters</div>
		</BorderBlock>
	);
}
