import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import QuestCard from '../../QuestCard/QuestCard';
import Button from '../../../ui/buttons/Button/Button';
import BorderBlock from '../../../ui/tags/BorderBlock/BorderBlock';
import BorderTag from '../../../ui/tags/BorderTag/BorderTag';
import { Link } from 'react-router-dom';

const description = `If you're a beginner and don't know where to start, complete training tasks and get rewards`;

function QuestsGroup({quests, title}) {
	const [page, setPage] = React.useState(0);
	const pageSize = 2;
	const endIndex = (page * pageSize) + pageSize;
	const startIndex = endIndex - pageSize;
	const questsToShow = quests.slice(startIndex, endIndex);

	return (
		<BorderBlock className={s.quests}>
			<div className={s.quests__info}>
				<div className={s.quests__title}>{title}</div>
				<div className={s.quests__description}>{description}</div>
				<BorderTag className={s.quests__count}>
					{quests.length + ' quests'}
				</BorderTag>
				<Link to={`/quests/detail/${quests[0].id}`} className={s.quests__link}>Begin your adventure</Link>
			</div>
			<div className={cn(s.quests__cards, s.cards)}>
				<Button
					className={cn(s.cards__nav_back, 'icon_arrow_nav')}
					onClick={() => setPage(page - 1)}
					isDisabled={page === 0}
				/>
				<div className={s.cards__quests}>
					{questsToShow.map((item, index) => (
						<QuestCard
							key={item.id}
							quest={item}
						/>
					))}
				</div>
				<Button
					className={cn(s.cards__nav_next, 'icon_arrow_nav')}
					onClick={() => setPage(page + 1)}
					isDisabled={Math.ceil(quests.length / 2-1) === page}
				/>
			</div>
		</BorderBlock>
	);
}

export default QuestsGroup;
