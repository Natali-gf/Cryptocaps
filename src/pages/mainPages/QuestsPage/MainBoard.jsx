import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {questsApi} from '../../../core/store/services/questsApi';
import BorderBlock from '../../../components/ui/tags/BorderBlock/BorderBlock';
import StoreButtonApple from '../../../components/ui/buttons/StoreButton/StoreButtonApple';
import StoreButtonGoogle from '../../../components/ui/buttons/StoreButton/StoreButtonGoogle';
import mainImg from "../../../assets/images/main_quest.png";

function MainBoard() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);
	const {data: quests} = questsApi.useFetchQuestsQuery('');
	// const {data} = userApi.useFetchUsersQuery('')
	// console.log(quests)
	React.useEffect(() => {}, []);
	// console.log(quests)
	return (
		<BorderBlock className={cn(s.mainBoard)}>
			<div className={s.mainBoard__info}>
				<div className={s.mainBoard__title}>ORIGINAL MILK CAPS GAME</div>
				<div className={s.mainBoard__subtitle}>
					STRIVE FOR THE WIN - KEEP TO THE RHYTHM - TRUST YOUR SKILL - NOT THE ALGORITHM
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
