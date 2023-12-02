import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {Link} from 'react-router-dom';
import Experience from '../../ui/tags/Experience/Experience';
import BorderTag from '../../ui/tags/BorderTag/BorderTag';
import SubscribeButton from '../../ui/buttons/SubscribeButton/SubscribeButton';

function PartnerCard({partner, isUserQuest, ...props}) {
	const [subscribe, setSubscribe] = React.useState(false);

	return (
		<Link className={s.card} to={'/space/detail/' + partner.id}>
			<div className={s.card__img}>
				<img src={partner.imgBg} alt={partner.name} />
			</div>

			<div className={s.card__textInfo}>
				<div className={cn(s.card__title, {[s.card__title_checked]: partner.isTrusted})}>
					{partner.name}
				</div>
				<div className={cn(s.card__tagInfo)}>
					<BorderTag
						children={`${
							partner.followers > 1000
								? (partner.followers / 1000).toFixed(2) + 'k'
								: partner.followers
						} followers`}
					/>
					<BorderTag>{partner.quests.length + ' quests'}</BorderTag>
				</div>
			</div>
			<div className={cn(s.card__others, s.others)}>
				<div className={cn(s.others__awards)}></div>
				<SubscribeButton
					isSubscribed={subscribe}
					onClick={() => setSubscribe(!subscribe)}
				/>
			</div>
		</Link>
	);
}

export default PartnerCard;
