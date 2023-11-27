import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
// import {fetchLeaderboard} from '../../core/store/slices/leaderboard';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from '../../Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';
import AdminHeader from '../../adminPanel/ProfileHeader/AdminHeader';

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
