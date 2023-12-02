import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Button from '../Button/Button';
import {QuestStep} from '../../../../core/constants/Quest';
import {Link} from 'react-router-dom';

function CheckButton({step, userWallets, requiredWallet, questSite}) {
	
	 if (step === QuestStep.NotStarted) {
		return (
			<Link
				className={cn(s.button, s.button_progress)}
				to={questSite}
				children={'Jump'}
			/>
		);
	} else if (step === QuestStep.Started) {
		return (
			<Button
				className={cn(s.button, s.button_progress)}
				onClick={() => console.log('Confirm')}
				children={'Confirm'}
			/>
		);
	} else if (step === QuestStep.Verification) {
		return (
			<div
				className={cn(s.button, s.button_verification)}
				children={'Verification'}
			/>
		);
	} else if (step === QuestStep.Rewarded) {
		return (
			<div className={cn(s.button, s.button_done)} children={'Completed!'} />
		);
	} else if (step === QuestStep.NotDone) {
		return (
			<Button
				className={cn(s.button, s.button_error)}
				onClick={() => console.log('Confirm')}
				children={'Confirm'}
			/>
		);
	} else if (!userWallets) {
		return (
			<Link
				className={cn(s.button, s.button_unauthorized)}
				to={'/authorization'}
				children={'Log in to start'}
			/>
		);
	} else if (!userWallets[requiredWallet]) {
		return (
			<Link
				className={cn(s.button, s.button_progress)}
				to={'/account/user/connect'}
				children={'Connect wallet'}
			/>
		);
	} else {
		return (
			<Button
				className={cn(s.button, s.button_error)}
				onClick={() => window.location.reload()}
				children={'Try again'}
			/>
		);
	}
}

export default CheckButton;
