import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Leaderboard from '../../Leaderboard/Leaderboard';
import {questsApi} from '../../../core/store/services/questsApi';
import {QuestStatus} from '../../../core/constants/Quest';
import QuestCard from '../../cards/QuestCard/QuestCard';
import {userApi} from '../../../core/store/services/userApi';
import Tabs from '../../ui/Tabs/Tabs';

function CustomQuests({title, subtitle, className}) {
	const [customPeriod, setCustomPeriod] = React.useState(QuestStatus.Finished);
	const {data: quests} = questsApi.useFetchQuestsQuery(customPeriod);
	const {data: user} = userApi.useFetchUserQuestsQuery();
console.log(user)
	const tabs = [
		{
			title: 'Finished',
			onClick: () => setCustomPeriod(QuestStatus.Finished),
			isActive: customPeriod === QuestStatus.Finished,
		},
		{
			title: 'Active',
			onClick: () => setCustomPeriod(QuestStatus.Active),
			isActive: customPeriod === QuestStatus.Active,
		},
		{
			title: 'Archive',
			onClick: () => setCustomPeriod(QuestStatus.Inactive),
			isActive: customPeriod === QuestStatus.Inactive,
		},
	];

	return (
		<div className={cn(s.quests, className)}>
			<Tabs className={s.quests__tabs} tabs={tabs} />
			<div className={s.quests__cards}>
				{user &&
					user[0].quests.map((item) => (
						<QuestCard key={item.id} quest={item} isUserQuest={true} />
					))}
			</div>
		</div>
	);
}

export default CustomQuests;
