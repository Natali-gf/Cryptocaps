import React from 'react';
import s from './style.module.scss';
import Sidebar from '../../Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';

function LayoutProfile() {
	return (
		<div className={s.wrapper}>
			<Sidebar isAdmin={false} />
			<div className={s.wrapper__container}>
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutProfile;
