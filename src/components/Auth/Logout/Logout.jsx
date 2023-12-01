import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Button from '../../ui/buttons/Button/Button';
import { Link } from 'react-router-dom';
import NavigationLink from '../../ui/Navlink/Navlink';

function Logout() {
	React.useEffect(() => {

	}, []);

	function handleckick(e) {
		e.preventDefault()
		localStorage.setItem('authorization', '');
		// window.location.assign('/')

		window.location.href = '/';
	}

	return (
		<>
			<Button className={cn(s.logout, 'icon_exit')} onClick={handleckick}>
				Log out
			</Button>
		</>
	);
}

export default Logout;
