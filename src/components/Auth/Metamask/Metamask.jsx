import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import Button from '../../ui/buttons/Button/Button';
import { useDispatch } from 'react-redux';
import { showAuthorization } from '../../../core/store/slices/windowStateSlice';

function Metamask({className, isConnected}) {
	const dispatch = useDispatch();

	async function onConnect() {
		if (window.ethereum) {
			window.ethereum
				.request({method: 'eth_requestAccounts'})
				.then((res) => {localStorage.setItem('authorization', 'user')
				dispatch(showAuthorization(false))})
				.catch((error) => console.log(error));
		} else {
			console.log('error');
		}
	}

	function getBalance(account) {
		if (window.ethereum) {
			window.ethereum
				.request({method: 'eth_requestAccounts', params: [account, 'latest']})
				.then((res) => console.log(res));
		} else {
			console.log('error');
		}
	}

	return (
		<Button className={cn(s.button, className)} onClick={onConnect}>
			{isConnected && <div className={s.connected}></div>}
		</Button>
	);
}

export default Metamask;
