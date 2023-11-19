import {Link} from 'react-router-dom';
import s from './style.module.scss';
import cn from 'classnames';
import Auth from '../../Auth/Auth';
import logo from '../../../assets/temp/images/image 1.png';
import Metamask from '../../Auth/Metamask/Metamask';

const navigation = [
	{type: 'link', title: 'Quests', link: ''},
	{type: 'link', title: 'Space', link: ''},
	{type: 'link', title: 'Web3', link: ''},
	{type: 'link', title: 'Swap', link: ''},
	{type: 'link', title: 'Bridge', link: ''},
	{
		type: 'menu',
		title: 'More ',
		submenu: [
			{type: 'link', title: 'one more link', link: ''},
			{type: 'link', title: 'one more link', link: ''},
			{type: 'link', title: 'one more link', link: ''},
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
						<Link className={s.navigation__link} to={'./'}>
							<img src={logo} alt='logo and home link' />
						</Link>
					</li>
					{navigation.map((item, idx) =>
						item.type === 'link' ? (
							<li className={s.navigation__item} key={idx}>
								<Link className={s.navigation__link} to={item.link}>
									{item.title}
								</Link>
							</li>
						) : (
							<li className={s.navigation__item} key={idx}>
								{item.title}
								<ul className={cn(s.navigation__submenu, s.submenu)}>
									{item.submenu.map((item, idx) => (
										<li className={s.submenu__item} key={idx}>
											<Link className={s.submenu__link} to={item.link}>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</li>
						)
					)}
				</ul>
			</nav>
			<div className={cn(s.header__auth, s.auth)}>
				<Link className={s.auth__button} to={'./profile'}>user</Link>
				<button className={s.auth__button}>Log In</button>
				<Metamask className={s.auth__button}/>
			</div>
		</header>
	);
}
