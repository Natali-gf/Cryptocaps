import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import Logout from '../../Auth/Logout/Logout';
import {useDispatch, useSelector} from 'react-redux';
import {Status, StatusCode} from '../../../core/constants/Status';
import NavigationLink from '../../ui/Navlink/Navlink';
import {fetchUser} from '../../../core/store/slices/user';

function UserData({user, inSidebar}) {

	return (
		<>
			{user && (
				<div className={cn(s.userData, {[s.userData_sidebar]: inSidebar})}>
					<div
						className={cn(s.userData__avatar, {
							[s.userData__avatar_sidebar]: inSidebar,
						})}>
						<img src={user.avatar} alt={user.username} />
					</div>
					<div
						className={cn(s.userData__nik, {
							[s.userData__nik_sidebar]: inSidebar,
						})}>
						{user.username}
					</div>
					<div
						className={cn(s.userData__lvl, {[s.userData__lvl_sidebar]: inSidebar})}>
						lvl {Math.floor(user.xp / 480)}
					</div>
					<div className={s.userData__range}>
						{!inSidebar && (
							<div className={s.userData__range_current}>
								{Math.floor(user.xp / 480)}
							</div>
						)}
						<div className={s.userData__range_lvl}>
							<div
								className={s.userData__range_lvl_xp}
								style={{
									width: `${Math.trunc(((user.xp % 480) * 100) / 235)}%`,
								}}
							/>
							<div className={s.userData__range_lvl_bar}></div>
						</div>
						{!inSidebar && (
							<div className={s.userData__range_next}>
								{Math.floor(user.xp / 480) + 1}
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default UserData;
