import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import BorderBlock from '../../ui/tags/BorderBlock/BorderBlock';
import StoreButtonGoogle from '../../ui/buttons/StoreButton/StoreButtonGoogle';
import StoreButtonApple from '../../ui/buttons/StoreButton/StoreButtonApple';
import phones from '../../../assets/images/phones.png';
import QuestCard from '../../cards/QuestCard/QuestCard';
import imgQuest1 from '../../../assets/images/bg_quest_01.png';
import imgQuest2 from '../../../assets/images/bg_quest_02.png';
import ring from '../../../assets/images/mascot/ring.png';

const quests = [
	{title: 'First Adventure', image: imgQuest1},
	{title: 'First Adventure', image: imgQuest2},
];

function AboutQuests({className}) {

	return (
		<div className={cn(s.quests, className)}>
			<div className={cn(s.quests__title)}>QUESTS</div>
			<BorderBlock className={s.quests__block}>
				<div className={cn(s.quests__description)}>
					Unlock a world of rewards and experiences, faster and easier than ever before.
					<br /> <br /> With Quests, the future is yours to discover!
				</div>
				<div className={cn(s.quests__cards)}>
					<QuestCard quest={quests[0]} isPreview={true} />
					<img src={ring} alt={'image'} />
					<QuestCard quest={quests[1]} isPreview={true} />
				</div>
			</BorderBlock>
		</div>
	);
}

export default AboutQuests;
