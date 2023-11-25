import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Leaderboard from '../../Leaderboard/Leaderboard';



function CustomQuests({title, subtitle, className}) {
	const [customPeriod, setCustomPeriod] = React.useState(null);
	const [activeTab, setActiveTab] = React.useState('finished');

	function handleClick() {
		setActiveTab(activeTab);
	}

	return (
		<div className={cn(s.quests, className)}>
			<div className={s.quests__tabs}>
				<div
					className={cn(s.quests__tab, {
						[s.quests__tab_active]: activeTab === 'finished',
					})}
					onClick={() => setActiveTab('finished')}>
					Finished
				</div>
				<div
					className={cn(s.quests__tab, {
						[s.quests__tab_active]: activeTab === 'daily',
					})}
					onClick={() => setActiveTab('daily')}>
					Daily
				</div>
				<div
					className={cn(s.quests__tab, {
						[s.quests__tab_active]: activeTab === 'archive',
					})}
					onClick={() => setActiveTab('archive')}>
					Archive
				</div>
			</div>
			{/* <Leaderboard customPeriod={customPeriod} /> */}
		</div>
	);
}

export default CustomQuests;
