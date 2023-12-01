import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import BorderBlock from '../../ui/tags/BorderBlock/BorderBlock';
import Level from '../../ui/Level/Level';
import nftI1 from '../../../assets/images/nft/nft_01.png';
import nftI2 from '../../../assets/images/nft/nft_02.png';
import nftI3 from '../../../assets/images/nft/nft_03.png';
import nftI4 from '../../../assets/images/nft/nft_04.png';
import nftI5 from '../../../assets/images/nft/nft_05.png';
import Button from '../../ui/buttons/Button/Button';

const nft = [
	{name: 'MAZG', img: nftI1, damage: 4, rarity: 2, weapon: 'Powerful air flows'},
	{name: 'MAZG', img: nftI2, damage: 3, rarity: 3, weapon: 'Powerful air flows'},
	{name: 'MAZG', img: nftI3, damage: 3, rarity: 4, weapon: 'Powerful air flows'},
	{name: 'MAZG', img: nftI4, damage: 5, rarity: 2, weapon: 'Powerful air flows'},
	{name: 'MAZG', img: nftI5, damage: 1, rarity: 5, weapon: 'Powerful air flows'},
];

function AboutNFT({className}) {
	const [nftSlider, setNftSlider] = React.useState(0);

	React.useEffect(() => {}, []);

	return (
		<div className={cn(s.nft, className)}>
			<div className={cn(s.nft__header, s.header)}>
				<div className={s.header__title}>NFT</div>
				<div className={cn(s.header__additional, 'icon_star_nft')}>
					<div className={s.header__subtitle}>Collection</div>
				</div>
			</div>
			<BorderBlock className={cn(s.nft__character, s.character)}>
				<div className={cn(s.character__visual)}>
					<Button
						className={cn(s.character__prev, 'icon_arrow_nft')}
						onClick={() =>
							setNftSlider((prev) => (prev === 0 ? nft.length - 1 : prev - 1))
						}></Button>
					<div className={cn(s.character__nft)}>
						<div className={cn(s.character__model)}>
							<img src={nft[nftSlider].img} alt={'nft'} />
						</div>
						<div className={cn(s.character__shadow)}></div>
					</div>
					<Button
						className={cn(s.character__next, 'icon_arrow_nft')}
						onClick={() =>
							setNftSlider((prev) => (prev === nft.length - 1 ? 0 : prev + 1))
						}></Button>
				</div>
				<div className={cn(s.character__info, s.info)}>
					<div className={s.info__title}>{nft[nftSlider].name}</div>
					<div className={cn(s.info__skills, s.skills)}>
						<div className={s.skills_damage}>
							<div className={cn(s.skills__title_damage, s.skills__title)}>DAMAGE</div>
							<Level
								className={cn(s.skills__level)}
								skillName={'damage'}
								currentLevel={nft[nftSlider].damage}
							/>
						</div>
						<div className={s.skills_rarity}>
							<div className={cn(s.skills__title, s.skills__title_rarity)}>RARITY</div>
							<Level
								className={cn(s.skills__level)}
								skillName={'rarity'}
								currentLevel={nft[nftSlider].rarity}
							/>
						</div>

						<div className={s.skills_weapon}>
							<div className={cn(s.skills__title, s.skills__weapon)}>WEAPON:</div>
							<div className={cn(s.skills__kind)}>{nft[nftSlider].weapon}</div>
						</div>
					</div>
				</div>
			</BorderBlock>
		</div>
	);
}

export default AboutNFT;
