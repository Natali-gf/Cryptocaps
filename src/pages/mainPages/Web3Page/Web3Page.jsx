import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import MainBlock from '../../../components/mainParts/MainBlock/MainBlock';

function Web3Page() {

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
