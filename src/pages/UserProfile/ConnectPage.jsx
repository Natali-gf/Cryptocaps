import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader';
import CustomLeadboard from '../../components/profile/CustomLeadboard/CustomLeadboard';
import Clue from '../../components/Clue/Clue';

function ConnectPage() {
	// const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);
	// const [errorNotification, showErrorNotification] = React.useState<boolean>(false);

	React.useEffect(() => {
	}, [])

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Account'} subtitle={'Connect settigns'} />
			<div className={s.content__main}>
				<CustomLeadboard />
				<Clue />
			</div>
		</main>
	);
}

export default ConnectPage;
