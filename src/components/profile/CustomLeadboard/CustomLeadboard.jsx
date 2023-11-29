import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Leaderboard from '../../Leaderboard/Leaderboard';
import Tabs from '../../ui/Tabs/Tabs';

function CustomLeadboard({title, subtitle, className}) {
	const [customPeriod, setCustomPeriod] = React.useState(null);
	const [activeTab, setActiveTab] = React.useState(true);

	const tabs = [
		{
			title: 'All time',
			onClick: () => setActiveTab(true),
			isActive: activeTab,
		},
		{
			title: 'Current period',
			onClick: () => setActiveTab(false),
			isActive: !activeTab,
		},
	];

	return (
		<div className={cn(s.leaderboard, className)}>
			<Tabs className={s.leaderboard__tabs} tabs={tabs}/>
			<Leaderboard customPeriod={customPeriod} inProfile={true} />
		</div>
	);
}

export default CustomLeadboard;
