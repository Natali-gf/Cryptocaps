import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
// import {fetchLeaderboard} from '../../core/store/slices/leaderboard';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from '../../Sidebar/Sidebar';
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
