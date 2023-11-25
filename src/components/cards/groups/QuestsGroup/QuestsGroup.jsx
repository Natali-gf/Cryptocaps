import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import QuestCard from '../../QuestCard/QuestCard';
import {useDispatch} from 'react-redux';
import {setQuestId} from '../../../../core/store/slices/questSlise';

function QuestsGroup({quests}) {
	const dispatch = useDispatch();

	return (
		<>
			{quests.map((item, index) => (
				<QuestCard
					key={item.id}
					quest={item}
					className={s.quests}
					onClick={() => {console.log(item.id)
						dispatch(setQuestId(item.id))}}
				/>
			))}
		</>
	);
}

export default QuestsGroup;
