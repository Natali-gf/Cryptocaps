import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader';
import CustomLeadboard from '../../components/profile/CustomLeadboard/CustomLeadboard';
import Hint from '../../components/Hint/Hint';

function ProfilePage() {

	React.useEffect(() => {
	}, [])

	return (
		<main className={cn(s.wrapper__content, s.content)}>
			<ProfileHeader title={'Account'} subtitle={'Profile'} />
			<div className={s.content__main}>
				<CustomLeadboard />
				{/* <Hint /> */}
			</div>
		</main>
	);
}

export default ProfilePage;
