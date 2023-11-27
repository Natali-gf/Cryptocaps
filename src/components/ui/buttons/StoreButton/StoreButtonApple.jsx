import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {Link} from 'react-router-dom';

function StoreButtonApple({
	className,
	children,
	onClick,
	isDisabled,
	...props
}) {
	return (
		<Link
			to={'https://www.apple.com/my/app-store/'}
			className={cn(s.button, className)}>
			<div className={s.button__logo_app}></div>
			<div>
				<div className={s.button__subtitle}>Download on the</div>
				<div className={s.button__title}>App Store</div>
			</div>
		</Link>
	);
}

export default StoreButtonApple;
