import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Sidebar from '../../Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';

function LayoutAdmin() {

	return (
		<div className={s.wrapper}>
			<Sidebar isAdmin={true} />
			<div className={s.wrapper__container}>
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutAdmin;
