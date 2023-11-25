import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ForUser from './ForUser/ForUser';
import ForAdmin from './ForAdmin/ForAdmin';
import Logout from '../Auth/Logout/Logout';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../../core/store/slices/user';
import {Status} from '../../core/constants/Status';
import {userApi} from '../../core/store/services/userApi';

function Sidebar({isAdmin}) {
	// const {data: admin} = userApi.useFetchAdminQuery();

	return (
		<>
			<div className={s.sidebar}>
				{isAdmin ? <ForAdmin /> : <ForUser />}
				<Logout className={s.sidebar__logout} />
			</div>
		</>
	);
}

export default Sidebar;
