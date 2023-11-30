import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';

function AboutSteps({title, subtitle, className}) {
	return (
		<div className={cn(s.instruction, className)}>
			<div className={s.instruction__title}>How it works</div>
			<div className={s.quests__cards}>
				{/* {user &&
					user[0].quests
						.filter((item) =>
							customPeriod === QuestStatus.Active
								? item.status === QuestStatus.Active
								: customPeriod === QuestStatus.Inactive
								? item.status === customPeriod
								: item.isDone
						)
						.map((item) => <QuestCard key={item.id} quest={item} isUserQuest={true} />)} */}
			</div>
		</div>
	);
}

export default AboutSteps;
