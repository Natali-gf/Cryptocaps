import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';
import MainBoard from './MainBoard';
import Tabs from '../../../components/ui/Tabs/Tabs';
import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import PartnersGroup from '../../../components/cards/groups/PartnersGroup/PartnersGroup';
import {partnersApi} from '../../../core/store/services/partnersApi';

function SpacePage() {
	const [activeTab, setActiveTab] = React.useState(true);

	const {data: partnersMostFollowers} = partnersApi.useFetchPartnersQuery({
		sort: 'followers',
		order: 'desc',
		limit: 3,
	});
	const {data: partnersVerified} = partnersApi.useFetchPartnersQuery({
		otherParam: {isTrusted: true},
		limit: 3,
	});
	const {data: partnersLatest} = partnersApi.useFetchPartnersQuery({
		sort: 'createDate',
		order: 'desc',
		limit: 3,
	});
	const {data: partnersOther} = partnersApi.useFetchPartnersQuery({limit: 3});

	const tabs = [
		{title: 'All', onClick: () => setActiveTab(true), isActive: activeTab},
		{title: 'Following', onClick: () => setActiveTab(false), isActive: !activeTab},
	];
	React.useEffect(() => {}, []);

	return (
		<>
			<main className={cn(s.content)}>
				<MainBoard />
				<Tabs className={s.content__tabs} tabs={tabs} />
				<SearchPanel />
				<h3 className={s.content__title}>With the most followers</h3>
				{partnersMostFollowers && <PartnersGroup partners={partnersMostFollowers} />}
				<h3 className={s.content__title}>Verified spaces</h3>
				{partnersVerified && <PartnersGroup partners={partnersVerified} />}
				<h3 className={s.content__title}>Latest spaces</h3>
				{partnersLatest && <PartnersGroup partners={partnersLatest} />}
				<h3 className={s.content__title}>Expand your bounders</h3>
				{partnersOther && <PartnersGroup partners={partnersOther} />}
				<h3 className={s.content__title}>Show full list...</h3>
			</main>
		</>
	);
}

export default SpacePage;
