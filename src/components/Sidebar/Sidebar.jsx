import React from 'react';
import s from './style.module.scss';
import ForUser from './ForUser/ForUser';
import ForAdmin from './ForAdmin/ForAdmin';
import Logout from '../Auth/Logout/Logout';

function Sidebar({isAdmin}) {

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
