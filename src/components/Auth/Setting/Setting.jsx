import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Button from '../../ui/Button/Button';

function Setting() {
	React.useEffect(() => {}, []);

	function handleckick() {}

	return (
		<>
			<Button className={s.logout} onClick={handleckick}>
				Log out
			</Button>
		</>
	);
}

export default Setting;
