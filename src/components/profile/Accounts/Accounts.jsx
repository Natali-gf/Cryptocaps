import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import {userApi} from '../../../core/store/services/userApi';
import Button from '../../ui/buttons/Button/Button';
import BorderBlock from '../../ui/tags/BorderBlock/BorderBlock';
import Metamask from '../../Auth/Metamask/Metamask';

export const Binance = ({isConnected}) => (
	<Button className={cn(s.account, s.account_binance)} type={'button'}>
		{isConnected && <div className={s.account__connected}></div>}
	</Button>
);
export const Trust = ({isConnected}) => (
	<Button className={cn(s.account, s.account_trust)} type={'button'}>
		{isConnected && <div className={s.account__connected}></div>}
	</Button>
);
export const Phantom = ({isConnected}) => (
	<Button className={cn(s.account, s.account_phantom)} type={'button'}>
		{isConnected && <div className={s.account__connected}></div>}
	</Button>
);
export const Discord = ({isConnected}) => (
	<Button className={cn(s.account, s.account_discord)} type={'button'}>
		{isConnected && <div className={s.account__connected}></div>}
	</Button>
);
export const Twitter = ({isConnected}) => (
	<Button className={cn(s.account, s.account_twitter)} type={'button'}>
		{isConnected && <div className={s.account__connected}></div>}
	</Button>
);
export const Telegram = ({isConnected}) => (
	<Button className={cn(s.account, s.account_telegram)} type={'button'}>
		{isConnected && <div className={s.account__connected}></div>}
	</Button>
);

function Accounts({className}) {
	const {data: user} = userApi.useFetchUserQuery();

	return (
		<BorderBlock className={cn(s.accounts, className)}>
			{user && (
				<>
					<div className={s.accounts__connects}>
						<div className={s.accounts__title}>Connect Wallet</div>
						<div className={s.accounts__list}>
							<Binance isConnected={user[0].wallets.binance} />
							<Metamask isConnected={true} />
							<Trust isConnected={user[0].wallets.trust} />
							<Phantom isConnected={user[0].wallets.phantom} />
						</div>
					</div>
					<div className={s.accounts__connects}>
						<div className={s.accounts__title}>Connect social media</div>
						<div className={s.accounts__list}>
							<Discord isConnected={user[0].socials.discord} />
							<Twitter isConnected={user[0].socials.twitter} />
							<Telegram isConnected={user[0].socials.telegram} />
						</div>
					</div>
				</>
			)}
		</BorderBlock>
	);
}

export default Accounts;
