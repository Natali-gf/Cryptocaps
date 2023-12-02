import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {questsApi} from '../../../core/store/services/questsApi';
import MainBoard from './MainBoard';
import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import Tabs from '../../../components/ui/Tabs/Tabs';
import QuestsGroup from '../../../components/cards/groups/QuestsGroup/QuestsGroup';
import Leaderboard from '../../../components/Leaderboard/Leaderboard';

function QuestsPage() {
	const [activeTab, setActiveTab] = React.useState(true);

	const {data: questsBeginner} = questsApi.useFetchQuestsBeginnerQuery('');
	const {data: questsFirst} = questsApi.useFetchQuestsFirstQuery('');
	const {data: questsNext} = questsApi.useFetchQuestsNextQuery('');
	const {data: questsExplore} = questsApi.useFetchQuestsExploreQuery('');

	const tabs = [
		{title: 'All', onClick: () => setActiveTab(true), isActive: activeTab},
		{title: 'Leaderboard', onClick: () => setActiveTab(false), isActive: !activeTab},
	];

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

	return (
		<main className={cn(s.content)}>
			<MainBoard />
			<Tabs className={s.content__tabs} tabs={tabs} />
			{/* <SearchPanel /> */}
			{activeTab ? (
				<>
					{questsBeginner && (
						<QuestsGroup quests={questsBeginner} title={'Styding for beginners'} />
					)}
					{questsFirst && (
						<QuestsGroup quests={questsFirst} title={'First Adventure (beginner)'} />
					)}
					{questsNext && <QuestsGroup quests={questsNext} title={'Next step (medium)'} />}
					{questsExplore && (
						<QuestsGroup quests={questsExplore} title={'Explore news (expert)'} />
					)}
				</>
			) : (
				<Leaderboard className={s.content__leaders} />
			)}
		</main>
	);
}

export default QuestsPage;
