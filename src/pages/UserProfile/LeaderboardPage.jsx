import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader';
import CustomLeadboard from '../../components/profile/CustomLeadboard/CustomLeadboard';
import Hint from '../../components/Hint/Hint';
import mascot from '../../assets/images/mascot/mascot.png';

function LeaderboardPage() {

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Leaderboard'} />
			<div className={s.content__main}>
				<CustomLeadboard />
				<Hint />
			</div>
			<div className={s.content__mascot}>
				<img src={mascot} alt={'mascot'} />
			</div>
		</main>
	);
}

export default LeaderboardPage;
