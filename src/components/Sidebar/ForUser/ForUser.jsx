import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import NavigationLink from '../../ui/Navlink/Navlink';
import UserData from '../../profile/UserData/UserData';
import {userApi} from '../../../core/store/services/userApi';
import BorderTag from '../../ui/tags/BorderTag/BorderTag';

function ForUser() {
	const {data: user} = userApi.useFetchUserQuery();

	return (
		<div className={s.sidebar}>
			{user && <UserData user={user[0]} inSidebar={true} />}
			<div className={s.menu}>
				<div className={s.menu__links}>
					<NavigationLink
						className={s.menu__item}
						activeClassName={s.menu__item_active}
						to={'/account/user'}
						disabled={true}>
						Account
					</NavigationLink>
					<NavigationLink
						className={s.menu__subitem}
						activeClassName={s.menu__subitem_active}
						to={'/account/user/profile'}>
						Profile
					</NavigationLink>
					<NavigationLink
						className={s.menu__subitem}
						activeClassName={s.menu__subitem_active}
						to={'/account/user/connect'}>
						Connect settings
					</NavigationLink>
					<NavigationLink
						className={s.menu__item}
						activeClassName={s.menu__item_active}
						to={'/account/leaderboard'}>
						Leaderboard
					</NavigationLink>
					<NavigationLink
						className={s.menu__item}
						activeClassName={s.menu__item_active}
						to={'/account/quests'}>
						Quests
					</NavigationLink>
				</div>
			</div>
			<ThemeSwitch className={s.menu__switchTheme} />
			<BorderTag className={s.menu__clue}>How to play?</BorderTag>
		</div>
	);
}

export default ForUser;
