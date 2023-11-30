import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import PartnerCard from '../../PartnerCard/PartnerCard';

function PartnersGroup({partners}) {

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
