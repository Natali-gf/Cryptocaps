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

function QuestsDetailPage() {
	const currentPath = useLocation().pathname;
	const currentQuestId = currentPath.match(/\/([^/]+)$/)[1];

	const {data: user} = userApi.useFetchUserQuery();
	const {data} = questsApi.useFetchQuestByIdQuery(currentQuestId);
	const [quest, setQuest] = React.useState(null);

	React.useEffect(() => {
		if (data) {
			const partsStartDate = data[0].dateStart.slice(0, 10).split('-');
			const partsEndDate = data[0].dateEnd.slice(0, 10).split('-');
			const dateStart = `${partsStartDate[2]}/${partsStartDate[1]}/${partsStartDate[0]}`;
			const dateEnd = `${partsEndDate[2]}/${partsEndDate[1]}/${partsEndDate[0]}`;

			setQuest({...data[0], dateStart: dateStart, dateEnd: dateEnd});
		}
	}, [data]);

	return (
		<>
			{quest && (
				<main className={cn(s.content)}>
					<div className={cn(s.content__mainBlock)}>
						<div
							className={cn(s.quest)}
							style={{'background-image': `url(${quest.image})`}}>
							<div className={cn(s.quest__company, s.company)}>
								<div className={cn(s.company__avatar)}>
									<img src={quest.companyAvatar} alt='' />
								</div>
								<div className={cn(s.company__name)}>{quest.companyName}</div>
							</div>
							<SubscribeButton isSubscribed={false} />
							<Experience className={s.quest__xp} children={quest.awards.xp} />
						</div>
						<div className={s.info}>
							<div className={s.info__questValues}>
								<StatusQuest status={quest.status} />
								<RewardType awards={quest.awards} />
								<Difficulty level={quest.difficulty} />
								<ChainType type={quest.chainType} />
							</div>
							<BorderTag
								children={`${
									quest.companyFollowers > 1000
										? (quest.companyFollowers / 1000).toFixed(2) + 'k'
										: quest.companyFollowers
								} followers`}
							/>
						</div>
					</div>
					<div className={cn(s.content__secondaryBlock)}>
						<div className={s.questPart}>
							<BorderBlock className={s.description}>
								<div className={s.description__date}>
									<div className={cn(s.date, s.date_start)}>
										{quest.dateStart}
									</div>
									<div className={cn(s.date, s.date_end, 'icon_arrow_towards')}>
										{quest.dateEnd}
									</div>
								</div>
								<div className={s.description__title}>{quest.title}</div>
								<div className={s.description__subtitle}>Description</div>
								<div className={s.description__text}>{quest.description}</div>
							</BorderBlock>
							<BorderBlock className={s.detail}>
								<QuestSteps step={quest.step} status={quest.status} />
								<TaskView network={quest.social} awards={quest.awards} />
							</BorderBlock>
							<CheckButton
								step={quest.step}
								questSite={quest.website}
								userWallets={user[0].wallets}
							/>
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
