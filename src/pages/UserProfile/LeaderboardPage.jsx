import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader';
import CustomLeadboard from '../../components/profile/CustomLeadboard/CustomLeadboard';
import Clue from '../../components/Clue/Clue';
import mascot from '../../assets/images/mascot.png';

function LeaderboardPage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);

	React.useEffect(() => {}, []);

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Leaderboard'} />
			<div className={s.content__main}>
				<CustomLeadboard />
				<div className={s.content__mascot}>
					<img src={mascot} alt={'mascot'} />
				</div>
				<Clue />
			</div>
		</main>
	);
}

export default LeaderboardPage;
