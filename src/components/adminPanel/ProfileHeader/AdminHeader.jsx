import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Search from '../../Search/Search';
import { useDispatch, useSelector } from 'react-redux';

function AdminHeader({title, className}) {
	const dispatch = useDispatch();
	const {user, status, error} = useSelector((state) => state.user);

	React.useEffect(() => {
		// dispatch(fetchLeaderboard());
	}, []);
console.log(user)
	return (
		<div className={cn(s.header, className)}>
				<div className={s.header__title}>{title}</div>
				{/* <Search /> */}

				{/* {subtitle && */}
					<div className={cn(s.header__profile, s.profile)}>
						<div className={s.profile__notifications}></div>
						<div className={s.profile__avatar}>
							<img className={s.profile__avatar_img} src={user.avatar} alt={user.nikname} />
						</div>
						<div className={s.profile__name}>{user.username}</div>
					</div>
				{/* } */}
		</div>
	);
}

export default AdminHeader;