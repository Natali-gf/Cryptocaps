import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Header from '../../components/mainParts/Header/Header';
import MainBlock from '../../components/mainParts/MainBlock/MainBlock';
import AnimationCanvas from '../../components/animation/AnimationCanvas';

function HomePage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);

	React.useEffect(() => {
	}, [])

	return (
		<>
			<Header />
			<AnimationCanvas />
			<main className={cn(s.content)}>
				<MainBlock />
			</main>

		</>
	);
}

export default HomePage;
