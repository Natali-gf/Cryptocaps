import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Leaderboard from '../../Leaderboard/Leaderboard';

function CustomLeadboard({title, subtitle, className}) {
	const [customPeriod, setCustomPeriod] = React.useState(null);
	const [activeTab, setActiveTab] = React.useState(true);

	return (
		<div className={cn(s.leaderboard, className)}>
			<div className={s.leaderboard__tabs}>
				<div
					className={cn(s.leaderboard__tab, {
						[s.leaderboard__tab_active]: activeTab,
					})}
					onClick={() => setActiveTab(true)}>
					All time
				</div>
				<div
					className={cn(s.leaderboard__tab, {
						[s.leaderboard__tab_active]: !activeTab,
					})}
					onClick={() => setActiveTab(false)}>
					Current period
				</div>
			</div>
			<Leaderboard customPeriod={customPeriod} inProfile={true} />
		</div>
	);
}

export default CustomLeadboard;
