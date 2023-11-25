import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

function Experience({className, children, onClick, isDisabled, ...props}) {

	return (
		<div className={cn(s.experience, className)} {...props}>
			{children} XP
		</div>
	);
}

export default Experience;
