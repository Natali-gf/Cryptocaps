import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import PartnerCard from '../../PartnerCard/PartnerCard';

const description = `If you're a beginner and don't know where to start, complete training tasks and get rewards`;

function PartnersGroup({partners, title}) {
	// const [page, setPage] = React.useState(0);
	// const pageSize = 2;
	// const endIndex = page * pageSize + pageSize;
	// const startIndex = endIndex - pageSize;
	// const questsToShow = partners.slice(startIndex, endIndex);
	// console.log(page);

	return (
		<div className={s.partners}>
			{partners.map((item) => (
				<PartnerCard
					key={item.id}
					partner={item}
				/>
			))}
		</div>
	);
}

export default PartnersGroup;
