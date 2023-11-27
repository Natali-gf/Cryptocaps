import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {fetchLeaderboard} from '../../../core/store/slices/leaderboard';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Experience from '../../ui/tags/Experience/Experience';


function QuestCard({quest, ...props}) {


	return (
		<>
			<Link className={s.card} to={'/quests/detail/' + quest.id} >
				<div className={s.card__img}>
					<img src={quest.image} alt={quest.title} />
				</div>
				<div className={s.card__textInfo}>
					<div className={s.card__title}>{quest.title}</div>
				</div>
				<div className={cn(s.card__awards, s.awards)}>
					{quest.awards.xp && (
						<Experience className={s.awards__xp} children={quest.awards.xp} />
					)}
					{quest.awards.nft && <div className={s.awards__nft}></div>}
				</div>
			</Link>
		</>
	);
}

export default QuestCard;
