import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader';
import Clue from '../../components/Clue/Clue';
import CustomQuests from '../../components/profile/CustomQuests/CustomQuests';

function QuestsPage() {

	React.useEffect(() => {
	}, [])

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Quests'} />
			<div className={s.content__main}>
				<CustomQuests />
				<Clue />
			</div>
		</main>
	);
}

export default QuestsPage;
