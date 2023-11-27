import React from "react";
import cn from "classnames";
import s from './style.module.scss';
import { Link } from "react-router-dom";

function StoreButtonGoogle({className, children, onClick, isDisabled, ...props}) {

	return (
		<Link
			to={'https://play.google.com/store/games?hl=ru&gl=US'}
			className={cn(s.button, className)}>
			<div className={s.button__logo_play}></div>
			<div>
				<div className={s.button__subtitle}>Get it on</div>
				<div className={s.button__title}>Google Play</div>
			</div>
		</Link>
	);
};

export default StoreButtonGoogle;
