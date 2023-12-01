import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import BorderBlock from '../../../components/ui/tags/BorderBlock/BorderBlock';
import StoreButtonApple from '../../../components/ui/buttons/StoreButton/StoreButtonApple';
import StoreButtonGoogle from '../../../components/ui/buttons/StoreButton/StoreButtonGoogle';
import mainImg from '../../../assets/images/phone.png';

function MainBoard() {
	return (
		<BorderBlock className={cn(s.mainBoard)}>
			<div className={s.mainBoard__info}>
				<div className={s.mainBoard__title}>ORIGINAL MILK CAPS GAME</div>

				<div className={s.mainBoard__text}>
					<div className={cn(s.mainBoard__subtitle, 'icon_arrow_nft')}>
						STRIVE FOR THE WIN
					</div>
					<div className={cn(s.mainBoard__subtitle, 'icon_arrow_nft')}>
						KEEP TO THE RHYTHM
					</div>
					<div className={cn(s.mainBoard__subtitle, 'icon_arrow_nft')}>
						TRUST YOUR SKILL - NOT THE ALGORITHM
					</div>
				</div>
				<div className={s.mainBoard__links}>
					<StoreButtonApple />
					<StoreButtonGoogle />
				</div>
			</div>
			<div className={s.mainBoard__img}>
				<img src={mainImg} alt='main image' />
			</div>
		</BorderBlock>
	);
}

export default MainBoard;
