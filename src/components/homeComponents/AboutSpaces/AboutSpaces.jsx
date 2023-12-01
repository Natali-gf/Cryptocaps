import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import MainBoard from '../../../pages/mainPages/SpacePage/MainBoard';
import mascot from '../../../assets/images/mascot/mascot_sit.png';

function AboutSpaces({className}) {
	return (
		<div className={cn(s.spaces, className)}>
			<div className={s.spaces__title}>SPACES</div>

			<MainBoard className={s.spaces__board} />

			<div className={s.spaces__mascot}>
				<img src={mascot} alt={'mascot'} />
			</div>
		</div>
	);
}

export default AboutSpaces;
