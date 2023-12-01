import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import AnimationCanvas from '../../../components/animation/AnimationCanvas';
import titleMain from '../../../assets/images/title_main.png';
import Mascot from './Mascot';
import AboutSteps from '../../../components/homeComponents/AboutSteps/AboutSteps';
import News from '../../../components/homeComponents/News/News';
import AboutGame from '../../../components/homeComponents/AboutGame/AboutGame';
import AboutNFT from '../../../components/homeComponents/AboutNFT/AboutNFT';
import AboutQuests from '../../../components/homeComponents/AboutQuests/AboutQuests';
import AboutSpaces from '../../../components/homeComponents/AboutSpaces/AboutSpaces';
import {Link} from 'react-router-dom';

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
						<Link className={s.mainText__link} to={'/quests'}>
							Explore Quests
						</Link>
					</div>
				</div>
				<div className={cn(s.content__boards)}>
					<AboutSteps />
					<AboutGame />
					<AboutNFT />
					<AboutQuests />
					<AboutSpaces />
					{/* <News /> */}
				</div>
			</main>
		</>
	);
}

export default HomePage;
