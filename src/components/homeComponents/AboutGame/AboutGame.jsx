import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import BorderBlock from '../../ui/tags/BorderBlock/BorderBlock';
import StoreButtonGoogle from '../../ui/buttons/StoreButton/StoreButtonGoogle';
import StoreButtonApple from '../../ui/buttons/StoreButton/StoreButtonApple';
import phones from '../../../assets/images/phones.png';

function AboutGame({className}) {
	return (
		<div className={cn(s.game, className)}>
			<div className={s.game__title}>MILK CAPS GAME</div>
			<BorderBlock className={s.game__block}>
				<div className={s.game__about}>
					<div className={cn(s.game__info, s.info)}>
						<div className={cn(s.info__description)}>
							CRYPTOCAPS gameplay is based on the original milk caps game played against
							other players. Each battle costs one caps token andequires a bet of NFT caps
						</div>
						<div className={cn(s.info__awards, s.award)}>
							<div className={s.award__item}>Receive loot-boxes containing NFTs</div>
							<div className={s.award__item}>Earn XP</div>
							<div className={s.award__item}>Win tokens</div>
						</div>
					</div>
					<div className={s.game__store}>
						<StoreButtonApple />
						<StoreButtonGoogle />
					</div>
				</div>
				<div className={cn(s.game__img)}>
					<img src={phones} alt={'phones'} />
				</div>
			</BorderBlock>
		</div>
	);
}

export default AboutGame;
