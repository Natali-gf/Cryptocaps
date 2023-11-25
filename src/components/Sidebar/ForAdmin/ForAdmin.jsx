import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import NavigationLink from '../../ui/Navlink/Navlink';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';

const menuOptions = [
	{
		type: 'menu',
		title: 'Main',
		submenu: [
			{type: 'link', title: 'General', link: '/admin/general'},
			{type: 'link', title: 'Users', link: '/admin/users'},
			{type: 'link', title: 'Tasks', link: '/admin/tasks'},
			{type: 'link', title: 'Plan', link: '/admin/plan'},
			{type: 'link', title: 'Partners', link: '/admin/partners'},
			{type: 'link', title: 'News', link: '/admin/news'},
		],
	},
	{
		type: 'menu',
		title: 'Partners',
		submenu: [
			{type: 'link', title: 'Tasks', link: '/admin/partnerTasks'},
			{type: 'link', title: 'News', link: '/admin/news'},
		],
	},
	{
		type: 'menu',
		title: 'Backup',
		submenu: [{type: 'link', title: 'Backup', link: '/admin/backup'}],
	},
];

function ForAdmin() {
	React.useEffect(() => {}, []);

	return (
		<div className={s.sidebar__container}>
			<div className={s.sidebar__title}>Cryptocaps</div>
			<div className={s.menu}>
				{menuOptions.map((item, index) => (
					<div className={cn(s.menu__chapter, s.chapter)} key={index}>
						<div className={s.chapter__title}>{item.title}</div>
						{item.submenu.map((item, index) => (
							<NavigationLink
								key={index}
								className={s.chapter__link}
								activeClassName={cn(
									s.chapter__link_active,
									'icon_arrow_down_after'
								)}
								to={item.link}>
								{item.title}
							</NavigationLink>
						))}
					</div>
				))}
			</div>
			<div className={s.sidebar__theme}>
				<ThemeSwitch />
			</div>
		</div>
	);
}

export default ForAdmin;
