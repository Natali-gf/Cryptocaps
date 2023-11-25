import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {
	QuestSocials,
	QuestStatus,
	QuestStep,
	QuestType,
} from '../../../../core/constants/Quest';
import BorderTag from '../BorderTag/BorderTag';

function TaskView({className, network, tasktype, awards, ...props}) {
	// const taskText =
	// 	tasktype === QuestType.Like
	// 		? 'hjk'
	// 		: tasktype === QuestType.Post
	// 		? 'hjk'
	// 		: tasktype === QuestType.Subscription
	// 		? 'hjk'
	// 		: 'hjk';

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
				{awards.nft && <div className={cn(s.awards__nft)}></div>}
				{awards.token && <div className={cn(s.awards__nft)}></div>}
				{awards.points && <div className={cn(s.awards__nft)}></div>}
			</div>
		</div>
	);
}

export default TaskView;
