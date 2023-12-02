import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

function RewardType({className, awards, ...props}) {
	const children = [
		awards.nft ? 'NFT' : '',
		awards.token ? 'token' : '',
		awards.xp ? 'points' : '',
	].join(' / ');

	return (
		<>
			{awards.nft && (
				<div className={cn(s.award, className)} {...props}>
					NFT
				</div>
			)}
		</>
	);
}

export default RewardType;
