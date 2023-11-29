import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {Link} from 'react-router-dom';
import Experience from '../../ui/tags/Experience/Experience';

function PartnerCard({partner, isUserQuest, ...props}) {
	// console.log(partner)
	return (
		<Link className={s.card} to={'/space/detail/' + partner.id}>
			<div className={s.card__img}>
				<img src={partner.imgBg} alt={partner.name} />
			</div>

			<div className={s.card__textInfo}>
				<div className={s.card__title}>{partner.name}</div>
			</div>
			<div className={cn(s.card__info, s.info)}>
				{/* <div className={cn(s.info__awards, s.awards)}>
					{partner.awards.xp && (
						<Experience className={s.awards__xp} children={partner.awards.xp} />
					)}
					{partner.awards.nft && <div className={s.awards__nft}></div>}
				</div> */}
				{/* {isUserQuest &&
					(partner.isDone === true ? (
						<div className={s.info__done}>Success</div>
					) : (
						<div className={s.info__notDone}>Declined</div>
					))} */}
			</div>
		</Link>
	);
}

export default PartnerCard;
