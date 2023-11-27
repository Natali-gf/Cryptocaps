import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {QuestSocials} from '../../../../core/constants/Quest';

function TaskView({className, network, tasktype, awards, ...props}) {
	const taskNetwork =
		network.name === QuestSocials.Twitter
			? 'twitter'
			: network.name === QuestSocials.Discord
			? 'discord'
			: 'telegram';
			
	return (
		<div className={cn(s.task, s[`task__${taskNetwork}`])} {...props}>
			<div className={cn(s.task__icon, s[`task__${taskNetwork}_icon`])} />
			<div className={cn(s.task__type)}>{network.typeTask}</div>
			<div className={cn(s.task__awards, s.awards)}>
				{awards.xp && (
					<div className={cn(s.task__awards_xp)}>{awards.xp + ' XP'}</div>
				)}
			</div>
		</div>
	);
}

export default TaskView;
