import {Link} from 'react-router-dom';
import s from './style.module.scss';
import cn from 'classnames';
import Auth from '../../Auth/Auth';
import logo from '../../../assets/images/logo.png';
import Metamask from '../../Auth/Metamask/Metamask';
import Button from '../../ui/buttons/Button/Button';
import NavigationLink from '../../ui/Navlink/Navlink';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';

const navigation = [
	{type: 'link', title: 'Quests', link: '/quests'},
	{type: 'link', title: 'Space', link: '/Space'},
	{type: 'link', title: 'Web3', link: '/web3'},
	{type: 'link', title: 'Swap', link: '/swap'},
	{type: 'link', title: 'Bridge', link: '/bridge'},
	{
		type: 'menu',
		title: 'More ',
		submenu: [
			{type: 'link', title: 'one more link', link: '/'},
			{type: 'link', title: 'one more link', link: '/'},
			{type: 'link', title: 'one more link', link: '/'},
		],
	},
];
export default function Header({title, subtitle, className}) {
	return (
		<header className={cn(s.header, className)}>
			{/* <Auth /> */}

			<nav className={cn(s.header__navigation, s.navigation)}>
				<ul className={cn(s.navigation__list)}>
					<li className={s.navigation__item}>
						<NavigationLink
							className={s.navigation__link}
							activeClassName={s.navigation__link_active}
							to={'/'}>
							<img src={logo} alt='logo and home link' />
						</NavigationLink>
					</li>
					{navigation.map((item, idx) =>
						item.type === 'link' ? (
							<li className={s.navigation__item} key={idx}>
								<NavigationLink
									className={s.navigation__link}
									activeClassName={s.navigation__link_active}
									to={item.link}>
									{item.title}
								</NavigationLink>
							</li>
						) : (
							<li className={s.navigation__item} key={idx}>
								{item.title}
								<ul className={cn(s.navigation__submenu, s.submenu)}>
									{item.submenu.map((item, idx) => (
										<li className={s.submenu__item} key={idx}>
											<NavigationLink
												className={s.submenu__link}
												activeClassName={s.navigation__link_active}
												to={item.link}>
												{item.title}
											</NavigationLink>
										</li>
									))}
								</ul>
							</li>
						)
					)}
				</ul>
			</nav>
			<div className={cn(s.header__auth, s.auth)}>
				<ThemeSwitch />
				<NavigationLink className={s.auth__button} to={'/admin/general'}>
					admin
				</NavigationLink>
				<NavigationLink className={s.auth__button} to={'/account/leaderboard'}>
					user
				</NavigationLink>
				<Button className={cn(s.auth__button, s.auth__button_login)}>
					Log In
				</Button>
				<Button className={cn(s.auth__button, s.auth__button_wallet)}>
				 	Wallet
				</Button>
				{/* <Metamask className={cn(s.auth__button, s.auth__button_wallet)} /> */}
			</div>
		</header>
	);
}
