import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {questsApi} from '../../../core/store/services/questsApi';
import MainBoard from './MainBoard';
import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import Tabs from '../../../components/ui/Tabs/Tabs';
import QuestsGroup from '../../../components/cards/groups/QuestsGroup/QuestsGroup';

function QuestsPage() {
	const [activeTab, setActiveTab] = React.useState(true);

	const {data: questsBeginner} = questsApi.useFetchQuestsBeginnerQuery('');
	const {data: questsFirst} = questsApi.useFetchQuestsFirstQuery('');
	const {data: questsNext} = questsApi.useFetchQuestsNextQuery('');
	const {data: questsExplore} = questsApi.useFetchQuestsExploreQuery('');

	const tabs = [
		{title: 'All', onClick: () => setActiveTab(true), isActive: activeTab},
		{title: 'Following', onClick: () => setActiveTab(false), isActive: !activeTab},
	];

	return (
		<main className={cn(s.content)}>
			<MainBoard />
			<Tabs className={s.content__tabs} tabs={tabs}/>
			<SearchPanel />
			{questsBeginner && (
				<QuestsGroup quests={questsBeginner} title={'Styding for beginners'} />
			)}
			{questsFirst && (
				<QuestsGroup quests={questsFirst} title={'First Adventure'} />
			)}
			{questsNext && <QuestsGroup quests={questsNext} title={'Next step'} />}
			{questsExplore && (
				<QuestsGroup quests={questsExplore} title={'Explore news'} />
			)}
		</main>
	);
}

export default QuestsPage;
