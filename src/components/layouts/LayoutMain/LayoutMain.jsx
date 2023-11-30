import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../../mainParts/Header/Header';

function LayoutMain() {
	return (
		<div className={s.wrapper}>
			<div className={s.wrapper__container}>
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutMain;
