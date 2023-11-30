import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../../components/profile/ProfileHeader/ProfileHeader';
import CustomLeadboard from '../../../components/profile/CustomLeadboard/CustomLeadboard';
import Hint from '../../../components/Hint/Hint';
import Accounts from '../../../components/profile/Accounts/Accounts';

function ConnectPage() {

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Account'} subtitle={'Connect settigns'} />
			<div className={s.content__subtitle}>Connect settings</div>
			{/* <div className={s.content__container}> */}
			<div className={s.content__main}>
				<Accounts />
				<div className={s.content__additional}>
					<Hint className={s.content__hint}
						children={'Сonnect different social media accounts to complete more tasks'}
					/>
				</div>
				{/* </div> */}
			</div>
		</main>
	);
}

export default ConnectPage;
