import React from 'react';
import s from './style.module.scss';
import Register from './Register';
import PopupWindow from '../ui/PopupWindow/PopupWindow';
import Authorization from './Authorization';

function Auth({className}) {
	const [isAuthorizationForm, changeAuthorizationForm] = React.useState(true);

	return (
		<>
			<PopupWindow
				isPopupAbsolute={true}
				className={className}
				children={
					<div className={s.auth}>

						{isAuthorizationForm ? (
							<Authorization changeAuthorizationForm={changeAuthorizationForm} />
						) : (
							<Register changeAuthorizationForm={changeAuthorizationForm} />
						)}
					</div>
				}
			/>
		</>
	);
}

export default Auth;
