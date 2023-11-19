import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';

export default function MainBlock({title, subtitle, className}) {
	React.useEffect(() => {

	}, []);

	return (
		<div className={cn(s.mainBlock)}>
			{/* <div className={cn(s.mainBlock__anim)}>

			</div> */}
		</div>
	);
}
