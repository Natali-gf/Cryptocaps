import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {userApi} from '../../core/store/services/userApi';
import BorderBlock from '../ui/tags/BorderBlock/BorderBlock';
import {partnersApi} from '../../core/store/services/partnersApi';

function Leaderboard({className, isPartners, inProfile}) {
	const tableHeaders = ['#', isPartners ? 'Followers' : inProfile ? 'XP' : 'lvl', 'Name'];

	const {data: leaders} = isPartners
		? partnersApi.useFetchPartnersQuery({
				sort: 'followers',
				order: 'desc',
				limit: 10,
		  })
		: userApi.useFetchLeadersQuery();

	return (
		<BorderBlock className={className}>
			<div className={s.leaderboard}>
				<h3 className={s.leaderboard__title}>Leaderboard</h3>
				<table className={cn(s.leaderboard__table, s.table)}>
					<thead className={s.table__head}>
						<tr className={cn(s.table__row_head, s.table__row)}>
							{tableHeaders.map((header, index) => (
								<th className={cn(s.table__column_head, s.table__column)} key={index}>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className={s.table__body}>
						{leaders &&
							leaders.map((item, index) => (
								<tr className={s.table__row} key={item.id}>
									<td className={s.table__column}>
										{index + 1 === 1
											? index + 1 + 'st'
											: index + 1 === 2
											? index + 1 + 'nd'
											: index + 1 === 3
											? index + 1 + 'rd'
											: index + 1 + 'th'}
									</td>
									<td className={s.table__column}>
										{isPartners
											? item.followers
											: inProfile
											? item.xp
											: Math.trunc(item.xp / 480)}
									</td>
									<td className={cn(s.table__column, s.user)}>
										<div className={s.user}>
											<div className={s.user__name}>
												{isPartners ? item.name : item.username}
											</div>
											<div className={s.user__avatar}>
												<img
													className={s.user__avatar_img}
													src={isPartners ? item.logo : item.avatar}
													alt={isPartners ? item.name : item.username}
												/>
											</div>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</BorderBlock>
	);
}

export default Leaderboard;
