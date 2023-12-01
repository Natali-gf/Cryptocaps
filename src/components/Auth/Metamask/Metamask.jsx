import React from 'react';
import {Link} from 'react-router-dom';
import s from './style.module.scss';
import cn from 'classnames';
import Button from '../../ui/buttons/Button/Button';
import {MetaMaskProvider, useSDK} from '@metamask/sdk-react';
import { useDispatch } from 'react-redux';
import { showAuthorization } from '../../../core/store/slices/windowStateSlice';

function Metamask({className, isConnected}) {
	const dispatch = useDispatch();

	const [userAccount, setUserAccount] = React.useState(null);
	const {sdk, connected, connecting, provider, chainId} = useSDK();

	async function onConnect() {
		// try {
		// 	const MMSDK = new (await import('@metamask/sdk')).MetaMaskSDK()
		// 	await MMSDK.init()
		// 	// .getProvider()

		//   const accounts = await sdk?.connect();
		//   setUserAccount(accounts?.[0]);
		// 	console.log(accounts?.[0])
		// 	// console.log(sdk, connected, connecting, provider, chainId, userAccount)
		// } catch(err) {
		//   console.warn(`failed to connect..`, err);
		// }
		if (window.ethereum) {
			window.ethereum
				.request({method: 'eth_requestAccounts'})
				.then((res) => {localStorage.setItem('authorization', 'user')
				dispatch(showAuthorization(false))})
				.catch((error) => console.log(error));

			//0xc39b6488589326043fe039ae99a984f5af9477e2
		} else {
			console.log(2);
		}
	}

	function getBalance(account) {
		if (window.ethereum) {
			window.ethereum
				.request({method: 'eth_requestAccounts', params: [account, 'latest']})
				.then((res) => console.log(res));
		} else {
			console.log(2);
		}
	}

	return (
		<Button className={cn(s.button, className)} onClick={onConnect}>
			{isConnected && <div className={s.connected}></div>}
		</Button>
	);
}

export default Metamask;
