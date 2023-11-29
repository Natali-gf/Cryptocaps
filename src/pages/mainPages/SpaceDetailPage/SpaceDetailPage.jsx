import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';
import MainBoard from './MainBoard';
import Tabs from '../../../components/ui/Tabs/Tabs';
import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import PartnersGroup from '../../../components/cards/groups/PartnersGroup/PartnersGroup';
import {partnersApi} from '../../../core/store/services/partnersApi';
import {useLocation} from 'react-router-dom';
import Filters from '../../../components/ui/Filters/Filters';
import BorderTag from '../../../components/ui/tags/BorderTag/BorderTag';
import BorderBlock from '../../../components/ui/tags/BorderBlock/BorderBlock';
import QuestsGroup from '../../../components/cards/groups/QuestsGroup/QuestsGroup';
import mascot from '../../../assets/images/mascot_show.png';
import QuestCard from '../../../components/cards/QuestCard/QuestCard';
import {userApi} from '../../../core/store/services/userApi';
import Button from '../../../components/ui/buttons/Button/Button';

function SpaceDetailPage() {
	const currentPath = useLocation().pathname;
	const currentPartnerId = currentPath.match(/\/([^/]+)$/)[1];

	const {data: partner} = partnersApi.useFetchPartnerByIdQuery(currentPartnerId);
	const {data: users} = userApi.useFetchLeadersQuery();
	console.log(users);
	const [activeTab, setActiveTab] = React.useState(true);
	// const {data: partners} = partnersApi.useFetchPartnersQuery({limit: 5});

	React.useEffect(() => {}, []);
	console.log(partner);
	return (
		<>
			<main className={cn(s.content)}>
				{partner && (
					<>
						<MainBoard partner={partner[0]} />
						<div className={cn(s.content__info)}>
							<div className={s.info__description}>{partner[0].description}</div>
							<BorderTag
								className={s.info__followers}
								children={`${
									partner[0].followers > 1000
										? (partner[0].followers / 1000).toFixed(2) + 'k'
										: partner[0].followers
								} followers`}
							/>
						</div>
						<div className={cn(s.content__others)}>
							<div className={cn(s.content__quests, s.quests)}>
								<div className={s.quests__panel}>
									<div className={s.quests__title}>Quests</div>
									<Filters />
								</div>
								<BorderBlock className={s.quests__list}>
									{partner[0].quests.map((item) => (
										<QuestCard quest={item} key={item.id} />
									))}
								</BorderBlock>
							</div>
							<div className={s.content__additional}>
								<BorderBlock className={cn(s.content__table, s.table)}>
									<div className={s.table__title}>Followers</div>
									<div className={s.table__followers}>
										{users &&
											users.map((item) => (
												<div className={s.follower}>
													<div className={s.follower__name}>{item.username}</div>
													<img
														className={s.follower__avatar}
														src={item.avatar}
														alt={item.username}
													/>
												</div>
											))}
									</div>
									<Button className={s.table__button} children={'View more'} />
								</BorderBlock>
								<div className={s.mascot}>
									<img src={mascot} alt='mascot' />
								</div>
							</div>
						</div>
					</>
				)}
			</main>
		</>
	);
}

export default SpaceDetailPage;
