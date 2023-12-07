import s from './style.module.scss';
import Search from '../ui/Search/Search';
import Filters from '../ui/Filters/Filters';

export default function SearchPanel() {

	return (
		<div className={s.panel}>
			<Filters />
			<Search />
		</div>
	);
}
