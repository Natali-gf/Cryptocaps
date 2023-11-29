import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Search from '../../ui/Search/Search';
import {useDispatch, useSelector} from 'react-redux';
import {userApi} from '../../../core/store/services/userApi';

function AdminHeader({title, className}) {
	const {data: admin} = userApi.useFetchAdminQuery();

	return (
		<>
			<div className={cn(s.header, className)}>
				<div className={s.header__title}>{title}</div>
				<Search isAdmin={true} />
				{admin && (
					<div className={cn(s.header__profile, s.profile)}>
						<div className={cn(s.profile__notifications, 'icon_notification')}></div>
						<div className={s.profile__avatar}>
							<img
								className={s.profile__avatar_img}
								src={admin[0].avatar}
								alt={admin[0].nikname}
							/>
						</div>
						<div className={s.profile__name}>{admin[0].username}</div>
					</div>
				)}
			</div>
		</>
	);
}

export default AdminHeader;
