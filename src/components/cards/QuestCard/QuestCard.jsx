import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {Link} from 'react-router-dom';
import Experience from '../../ui/tags/Experience/Experience';

function QuestCard({quest, isUserQuest, isPreview, ...props}) {
	return (
		<Link
			className={s.card}
			to={'/quests/detail/' + quest.id}
			onClick={(e) => (isPreview ? e.preventDefault() : '')}>
			<div className={s.card__img}>
				<img src={quest.image} alt={quest.title} />
			</div>
			<div className={s.card__textInfo}>
				<div className={s.card__title}>{quest.title}</div>
			</div>
			{!isPreview ? (
				<div className={cn(s.card__info, s.info)}>
					<div className={cn(s.info__awards, s.awards)}>
						{quest.awards.xp && (
							<Experience className={s.awards__xp} children={quest.awards.xp} />
						)}
						{quest.awards.nft && <div className={s.awards__nft}></div>}
					</div>
					{isUserQuest &&
						(quest.isDone === true ? (
							<div className={s.info__done}>Success</div>
						) : (
							<div className={s.info__notDone}>Declined</div>
						))}
				</div>
			) : (
				<div className={s.block}>
					<div className={s.block__box}></div>
					<div className={s.block__box}></div>
					<div className={s.block__box}></div>
				</div>
			)}
		</Link>
	);
}

export default QuestCard;
