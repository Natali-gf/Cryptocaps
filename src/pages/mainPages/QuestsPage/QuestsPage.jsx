import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';
import QuestCard from '../../../components/cards/QuestCard/QuestCard';
import { questsApi } from '../../../core/store/services/questsApi';
import { userApi } from '../../../core/store/services/userApi';
import QuestsGroup from '../../../components/cards/groups/QuestsGroup/QuestsGroup';

function QuestsPage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);
	const {data: quests} = questsApi.useFetchQuestsQuery('')
	// const {data} = userApi.useFetchUsersQuery('')
// console.log(quests)
	React.useEffect(() => {
	}, [])
// console.log(quests)
	return (
		<>
			<main className={cn(s.content)}>
				<MainBlock />
				{quests && <QuestsGroup quests={quests} />}
			</main>
		</>
	);
}

export default QuestsPage;
