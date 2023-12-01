import React from 'react';
import s from './style.module.scss';
import Register from './Register';
import PopupWindow from '../ui/PopupWindow/PopupWindow';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
// import { showWindowAuth } from '../../store/slices/windowStateSlice';
import Authorization from './Authorization';

function Auth({className}) {
	// const { windowAuth } = useSelector((state) => state.statePopupWindow);
	const [isAuthorizationForm, changeAuthorizationForm] = React.useState(true);

	return (
		<>
			{/* {windowAuth && */}
			<PopupWindow
				isPopupAbsolute={true}
				className={className}
				// closeWindow={showWindowAuth}
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
			{/* } */}
		</>
	);
}

export default Auth;
