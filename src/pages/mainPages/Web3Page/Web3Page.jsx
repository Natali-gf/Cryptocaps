import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';

function Web3Page() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);

	React.useEffect(() => {
	}, [])

	return (
		<>
			<main className={cn(s.content)}>
				<MainBlock />
			</main>
		</>
	);
}

export default Web3Page;
