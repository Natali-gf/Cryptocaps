import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';
import AnimationCanvas from '../../../components/animation/AnimationCanvas';
import titleMain from '../../../assets/images/title_main.png';
import Mascot from './Mascot';
import AboutSteps from '../../../components/homeComponents/AboutSteps/AboutSteps';

const mainSubtitle = `strive for the win - keep to the rhythm - trust your skill - not the algorithm`;

function HomePage() {
	return (
		<>
			<AnimationCanvas />
			<main className={cn(s.content)}>
				<div className={cn(s.content__mainScreen, s.mainScreen)}>
					<Mascot />
					<div className={s.mainText}>
						<img className={s.mainText__title} src={titleMain} alt={'Cryptocaps'} />
						<div className={s.mainText__subtitle}>{mainSubtitle}</div>
					</div>
				</div>

				{/* <MainBlock /> */}
				<AboutSteps />
			</main>
		</>
	);
}

export default HomePage;
