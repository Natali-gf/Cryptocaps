import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Button from '../Button/Button';

function SubscribeButton({className, isSubscribed, isRuntimeError, ...props}) {

	return (
		<Button
			className={cn(
				s.button,
				{'icon_add': !isSubscribed},
				{'icon_done': isSubscribed},
				{[s.button__error]: isRuntimeError},
				className
			)}
			children={isSubscribed ? 'Followed' : 'Follow'}
			{...props}
		/>
	);
}

export default SubscribeButton;
