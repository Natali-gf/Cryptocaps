import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import BorderBlock from '../../../components/ui/tags/BorderBlock/BorderBlock';
import {partnersApi} from '../../../core/store/services/partnersApi';
import SubscribeButton from '../../../components/ui/buttons/SubscribeButton/SubscribeButton';
import Button from '../../../components/ui/buttons/Button/Button';
import mascot from '../../../assets/images/mascot_sit.png';
import {Link} from 'react-router-dom';

function MainBoard({partner}) {
	console.log(partner);
	return (
		<BorderBlock className={cn(s.mainBoard)}>
			<div className={s.mainBoard__bg}></div>
			{partner && (
				<div className={cn(s.mainBoard__info, s.info)}>
					<div className={cn(s.info__partner, s.partner)}>
						<div className={s.partner__logo}>
							<img src={partner.logo} alt={partner.name} />
						</div>
						<div className={s.partner__info}>
							<div className={s.partner__text}>
								<div className={s.partner__name}>{partner.name}</div>
								<div className={s.partner__description}>{partner.shortDescription}</div>
							</div>
							<SubscribeButton />
						</div>
					</div>
					<div className={cn(s.info__socials, s.socials)}>
						<div className={s.socials__title}>We are in social networks</div>
						<div className={cn(s.socials__links)}>
							{partner.socials.instagram && (
								<Link
									className={s.socials__instagram}
									to={partner.socials.instagram}
									target={'_blank'}
								/>
							)}
							{partner.socials.twitter && (
								<Link
									className={s.socials__twitter}
									to={partner.socials.twitter}
									target={'_blank'}
								/>
							)}
							{partner.socials.discord && (
								<Link
									className={s.socials__discord}
									to={partner.socials.discord}
									target={'_blank'}
								/>
							)}
							{partner.socials.telegram && (
								<Link
									className={s.socials__telegram}
									to={partner.socials.telegram}
									target={'_blank'}
								/>
							)}
						</div>
					</div>
				</div>
			)}
			{/* <img className={s.mainBoard__mascot} src={mascot} alt={'mascot'} /> */}
			<Button className={s.mainBoard__button}>Create your space</Button>
		</BorderBlock>
	);
}

export default MainBoard;
