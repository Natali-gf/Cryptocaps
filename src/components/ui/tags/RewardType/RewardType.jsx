import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

function RewardType({className, awards, ...props}) {
	const children = [
		awards.nft ? 'nft' : '',
		awards.token ? 'token' : '',
		awards.xp ? 'points' : '',
	].join(' / ');
	
	return (
		<div className={cn(s.experience, className)} {...props}>
			{children}
		</div>
	);
}

export default RewardType;
