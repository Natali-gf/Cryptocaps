import React from 'react';
import {Link} from 'react-router-dom';
import s from './style.module.scss';
import cn from 'classnames';
import IconM from '../../assets/images/metamask.svg';
import IconT from '../../assets/images/trust.png';
import IconB from '../../assets/images/binance.svg';
import FormAuthorization from './forms/FormAuthorization';
import Button from '../ui/buttons/Button/Button';
import Metamask from './Metamask/Metamask';

function Authorization({changeAuthorizationForm}) {
	return (
		<>
			<div className={s.auth__info}>
				<div className={s.auth__title}>Log in to in Cryptocaps</div>
				<div className={s.auth__description}>
					By logging in to Cryptocaps, you agree to Terms of Service and Privacy Policy
				</div>
			</div>
			<FormAuthorization type='register' style={s.form} inputStyle={s.form__input} />
			<div className={s.auth__title}>Log in witn wallet</div>
			<div className={cn(s.auth__social)}>
				<Link className={cn(s.social, s.social_metamask)} to='#'>
					<img className={s.social__img} src={IconM} />
					<div className={s.social__text}>
						<Metamask />
						Metamask
					</div>
				</Link>
				<Link className={cn(s.social, s.social_trust)} to='#'>
					<img className={s.social__img} src={IconT} />
					<div className={s.social__text}>Trust wallet</div>
				</Link>
				<Link className={cn(s.social, s.social_binance)} to='#'>
					<img className={s.social__img} src={IconB} />
					<div className={s.social__text}>Binance</div>
				</Link>
			</div>
			<Button className={s.auth__btn} onClick={() => changeAuthorizationForm(false)}>
				I don’t have wallet
			</Button>
		</>
	);
}

export default Authorization;
