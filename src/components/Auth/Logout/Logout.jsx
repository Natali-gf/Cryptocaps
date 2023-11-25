import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Button from '../../ui/buttons/Button/Button';

function Logout() {
	React.useEffect(() => {}, []);

	function handleckick() {}

	return (
		<>
			<Button className={cn(s.logout, 'icon_exit')} onClick={handleckick}>
				Log out
			</Button>
		</>
	);
}

export default Logout;
