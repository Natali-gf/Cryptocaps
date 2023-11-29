import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import BorderBlock from '../../../components/ui/tags/BorderBlock/BorderBlock';
import {partnersApi} from '../../../core/store/services/partnersApi';
import SubscribeButton from '../../../components/ui/buttons/SubscribeButton/SubscribeButton';
import Button from '../../../components/ui/buttons/Button/Button';
import mascot from "../../../assets/images/mascot_sit.png";

function MainBoard() {
	const slideRef = React.useRef();
	const [slider, setSlider] = React.useState(0);
	const {data: partners} = partnersApi.useFetchPartnersQuery({limit: 5});

	React.useEffect(() => {
		if (partners) {
			if (slideRef.current) {
				clearInterval(slideRef.current);
			}
			slideRef.current = setInterval(() => {
				setSlider((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
			}, 5000);
		}
	}, [partners]);

	return (
		<BorderBlock className={cn(s.mainBoard)}>
					<div className={s.mainBoard__bg}></div>
			{partners && (
				<div className={cn(s.mainBoard__info, s.info)}>
					<div className={cn(s.info__partner, s.partner)}>
						<div className={s.partner__logo}>
							<img src={partners[slider].logo} alt={partners[slider].name} />
						</div>
						<div className={s.partner__info}>
							<div className={s.partner__text}>
								<div className={s.partner__name}>{partners[slider].name}</div>
								<div className={s.partner__description}>
									{partners[slider].shortDescription}
								</div>
							</div>
							<SubscribeButton />
						</div>
					</div>
					<div className={cn(s.info__otherPartners, s.otherPartners)}>
						<div className={s.otherPartners__title}>They are trusted</div>
						<div className={s.otherPartners__list}>
							{partners.map((item, index) => (
								<div className={s.otherPartners__logo} key={index}>
									<img src={item.logo} alt={item.name} />
								</div>
							))}
						</div>
					</div>
				</div>
			)}
			<img className={s.mainBoard__mascot} src={mascot} alt={'mascot'} />
			<Button className={s.mainBoard__button}>Create your space</Button>
		</BorderBlock>
	);
}

export default MainBoard;
