import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {questsApi} from '../../../core/store/services/questsApi';
import {userApi} from '../../../core/store/services/userApi';
import {useLocation} from 'react-router-dom';
import Experience from '../../../components/ui/tags/Experience/Experience';
import SubscribeButton from '../../../components/ui/buttons/SubscribeButton/SubscribeButton';
import ChainType from '../../../components/ui/tags/ChainType/ChainType';
import Difficulty from '../../../components/ui/tags/Difficulty/Difficulty';
import RewardType from '../../../components/ui/tags/RewardType/RewardType';
import StatusQuest from '../../../components/ui/tags/StatusQuest/StatusQuest';
import BorderBlock from '../../../components/ui/tags/BorderBlock/BorderBlock';
import BorderTag from '../../../components/ui/tags/BorderTag/BorderTag';
import Leaderboard from '../../../components/Leaderboard/Leaderboard';
import QuestSteps from '../../../components/ui/tags/QuestSteps/QuestSteps';
import TaskView from '../../../components/ui/tags/TaskView/TaskView';
import CheckButton from '../../../components/ui/buttons/CheckButton/CheckButton';
import UserData from '../../../components/profile/UserData/UserData';
import mascot from '../../../assets/images/mascot/mascot.png';
import {partnersApi} from '../../../core/store/services/partnersApi';

function QuestsDetailPage() {
	const currentPath = useLocation().pathname;
	const currentQuestId = currentPath.match(/\/([^/]+)$/)[1];

	const [quest, setQuest] = React.useState(null);
	const [partner, setPartner] = React.useState(null);
	const [partnerId, setPartnerId] = React.useState(null);
	const [currentUserQuest, setCurrentUserQuest] = React.useState(null);

	const {data: user} = userApi.useFetchUserQuery();
	const {data: questbyId} = questsApi.useFetchQuestByIdQuery(currentQuestId);
	const {data: partnerById} = partnersApi.useFetchPartnerByIdQuery(partnerId);

	React.useEffect(() => {
		if (questbyId) {
			const partsStartDate = questbyId[0].dateStart.slice(0, 10).split('-');
			const partsEndDate = questbyId[0].dateEnd.slice(0, 10).split('-');
			const dateStart = `${partsStartDate[2]}/${partsStartDate[1]}/${partsStartDate[0]}`;
			const dateEnd = `${partsEndDate[2]}/${partsEndDate[1]}/${partsEndDate[0]}`;

			setPartnerId(questbyId[0].idPartner);
			setQuest({...questbyId[0], dateStart: dateStart, dateEnd: dateEnd});
		}
	}, [questbyId]);

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

	React.useEffect(() => {
		if (partnerById) {
			setPartner(partnerById[0]);
		}
	}, [partnerById]);
	// console.log(user)
	React.useEffect(() => {
		if (user) {
			console.log(user);
			user[0].quests.some((el) => {
				if (el.id === currentQuestId) {
					console.log(el);
					setCurrentUserQuest(el);
				}
			});
		}
	}, [user]);
	// console.log(currentUserQuest)
	return (
		<>
			{quest && (
				<main className={cn(s.content)}>
					<div className={cn(s.content__mainBlock)}>
						<div
							className={cn(s.quest)}
							style={{
								backgroundImage: `url(${quest.image})`,
							}}>
							<div className={cn(s.quest__op)}></div>
							<div className={cn(s.quest__company, s.company)}>
								<div className={cn(s.company__avatar)}>
									{partner && <img src={partner.logo} alt={partner.name} />}
								</div>
								{partner && <div className={cn(s.company__name)}>{partner.name}</div>}
							</div>
							{/* <SubscribeButton className={s.quest__subs} isSubscribed={false} /> */}
							<Experience className={s.quest__xp} children={quest.awards.xp} />
						</div>
						<div className={s.info}>
							<div className={s.info__questValues}>
								<StatusQuest status={quest.status} />
								<RewardType awards={quest.awards} />
								<Difficulty level={quest.difficulty} />
								<ChainType type={quest.chainType} />
							</div>
							{partner && (
								<BorderTag
									children={`${
										partner.followers > 1000
											? (partner.followers / 1000).toFixed(2) + 'k'
											: partner.followers
									} followers`}
								/>
							)}
						</div>
					</div>
					<div className={cn(s.content__secondaryBlock)}>
						<div className={s.questPart}>
							<BorderBlock className={s.description}>
								<div className={s.description__date}>
									<div className={cn(s.date, s.date_start)}>{quest.dateStart}</div>
									<div className={cn(s.date, s.date_end, 'icon_arrow_towards')}>
										{quest.dateEnd}
									</div>
								</div>
								<div className={s.description__title}>{quest.title}</div>
								<div className={s.description__subtitle}>Description</div>
								<div className={s.description__text}>{quest.description}</div>
							</BorderBlock>
							<BorderBlock className={s.detail}>
								<QuestSteps
									{...(currentUserQuest ? {step: currentUserQuest.step} : {})}
									status={quest.status}
								/>
								<TaskView network={quest.social} awards={quest.awards} />
							</BorderBlock>
							<CheckButton
								{...(currentUserQuest ? {step: currentUserQuest.step} : {})}
								questSite={quest.website}
								userWallets={user[0].wallets}
							/>
							<div className={s.mascot}>
								<img src={mascot} alt='mascot' />
							</div>
						</div>
						<div className={s.infoPart}>
							<BorderBlock className={s.infoPart__user}>
								<UserData user={user[0]} />
							</BorderBlock>
							<Leaderboard />
						</div>
					</div>
				</main>
			)}
		</>
	);
}

export default QuestsDetailPage;
