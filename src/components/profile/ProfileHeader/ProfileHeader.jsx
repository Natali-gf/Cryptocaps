import {Link} from 'react-router-dom';
import s from './style.module.scss';
import cn from 'classnames';

function ProfileHeader({title, className}) {
	return (
		<div className={cn(s.header, className)}>
			<Link className={s.header__homeBtn} to={'/'}>Home</Link>
			<div className={s.header__headings}>
				<div className={s.header__title}>{title}</div>
			</div>
		</div>
	);
}

export default ProfileHeader;