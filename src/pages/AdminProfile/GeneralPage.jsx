import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

function GeneralPage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);

	React.useEffect(() => {
	}, [])

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<div className={s.content__main}>
				
			</div>
		</main>
	);
}

export default GeneralPage;
