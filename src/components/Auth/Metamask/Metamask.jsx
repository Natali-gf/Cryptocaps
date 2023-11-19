import React from 'react';
import {Link} from 'react-router-dom';
import s from './style.module.scss';
import cn from 'classnames';
import logoMetamask from '../../../assets/temp/images/icons8-метамаска-логотип-48 1.png';
import Button from '../../ui/Button/Button';
import { MetaMaskProvider, useSDK } from '@metamask/sdk-react';

function Metamask({className}) {
	const [userAccount, setUserAccount] = React.useState(null);
  const { sdk, connected, connecting, provider, chainId } = useSDK();

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
				.then((res) => console.log(res))
				.catch(error => console.log(error))
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
		// <MetaMaskProvider
		// // debug={false} sdkOptions={{
		// // 	checkInstallationImmediately: false,
		// // 	// extensionOnly: true,
		// // 	dappMetadata: {
		// // 		name: "Cryptocaps",
		// // 		url: window.location.host,
		// // 	}
		// // }}
		// >
		<Button className={cn(s.button)} onClick={onConnect} >
			<img src={logoMetamask} alt='Metamask' />
		</Button>
		// </MetaMaskProvider>
	);
}

export default Metamask;
