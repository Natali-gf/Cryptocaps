import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader';
import Hint from '../../components/Hint/Hint';
import CustomQuests from '../../components/profile/CustomQuests/CustomQuests';

function QuestsPage() {

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Quests'} />
			<div className={s.content__quests}>
				<CustomQuests />
				{/* <Hint /> */}
			</div>
		</main>
	);
}

export default QuestsPage;
