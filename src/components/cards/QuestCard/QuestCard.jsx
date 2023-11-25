import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {fetchLeaderboard} from '../../../core/store/slices/leaderboard';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


function QuestCard({quest, ...props}) {


	return (
		<>
			<Link className={s.card} to={'/quests/detail/' + quest.id} {...props}>
				<div className={s.card__img}>
					<img src={quest.image} alt={quest.title} />
					{quest.isActive ? (
						<div className={cn(s.card__status, s.card__status_active)}>
							active
						</div>
					) : (
						<div className={cn(s.card__status, s.card__status_inactive)}>
							inactive
						</div>
					)}
				</div>
				<div className={s.card__textInfo}>
					<div className={s.card__title}>{quest.title}</div>
				</div>
				<div className={cn(s.card__awards, s.awards)}>
					{quest.awards.xp && (
						<div className={s.awards__xp}>{quest.awards.xp} XP</div>
					)}
					{quest.awards.nft && <div className={s.awards__nft}></div>}
					{quest.isDone && <div className={s.awards__nft}></div>}
				</div>
			</Link>
		</>
	);
}

export default QuestCard;
