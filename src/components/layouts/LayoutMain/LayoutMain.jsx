import React from 'react';
import s from './style.module.scss';
import {Outlet} from 'react-router-dom';
import Header from '../../mainParts/Header/Header';
import {useSelector} from 'react-redux';
import Auth from '../../Auth/Auth';

function LayoutMain() {
	const {authorization} = useSelector((state) => state.statePopupWindow);

	return (
		<div className={s.wrapper}>
			<div className={s.wrapper__container}>
				{authorization && <Auth className={s.wrapper__authorization} />}
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutMain;
