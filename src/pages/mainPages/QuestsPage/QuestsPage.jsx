import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';
import QuestCard from '../../../components/cards/QuestCard/QuestCard';
import {questsApi} from '../../../core/store/services/questsApi';
import {userApi} from '../../../core/store/services/userApi';
import QuestsGroup from '../../../components/cards/groups/QuestsGroup/QuestsGroup';
import MainBoard from './MainBoard';

function QuestsPage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);
	const {data: questsBeginner} = questsApi.useFetchQuestsBeginnerQuery('');
	const {data: questsFirst} = questsApi.useFetchQuestsFirstQuery('');
	const {data: questsNext} = questsApi.useFetchQuestsNextQuery('');
	const {data: questsExplore} = questsApi.useFetchQuestsExploreQuery('');

	// console.log(questsExplore)
	React.useEffect(() => {}, []);

	return (
		<>
			<main className={cn(s.content)}>
				<MainBoard />
				{questsBeginner && (
					<QuestsGroup
						quests={questsBeginner}
						title={'Styding for beginners'}
					/>
				)}
				{questsFirst && (
					<QuestsGroup quests={questsFirst} title={'First Adventure'} />
				)}
				{questsNext && <QuestsGroup quests={questsNext} title={'Next step'} />}
				{questsExplore && (
					<QuestsGroup quests={questsExplore} title={'Explore news'} />
				)}
			</main>
		</>
	);
}

export default QuestsPage;
