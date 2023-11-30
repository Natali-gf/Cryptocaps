import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import AnimationCanvas from '../../../components/animation/AnimationCanvas';
import titleMain from '../../../assets/images/title_main.png';
import Mascot from './Mascot';
import AboutSteps from '../../../components/homeComponents/AboutSteps/AboutSteps';
import AboutGame from '../../../components/homeComponents/AboutGame/AboutGame';

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
				<div className={cn(s.content__boards)}>
					<AboutSteps />
					<AboutGame />
					<AboutGame />
				</div>
			</main>
		</>
	);
}

export default HomePage;
