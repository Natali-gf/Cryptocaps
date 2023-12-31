import React from 'react';
import s from './style.module.scss';
import Input from '../../ui/Input/Input';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import Button from '../../ui/buttons/Button/Button';
import {Discord, Telegram, Twitter} from '../../profile/Accounts/Accounts';
import {
	showAuthorization,
} from '../../../core/store/slices/windowStateSlice';

const FormAuthorization = ({}) => {
	const dispatch = useDispatch();
	const {register, setValue, handleSubmit} = useForm({
		mode: 'all',
		defaultValues: {
			isRemember: false,
		},
	});

	React.useEffect(() => {}, []);

	const onSubmit = (data, e) => {
		e.preventDefault();
		console.log('log');
		if (data.email.includes('user')) {
			localStorage.setItem('authorization', 'user');
		} else if (data.email.includes('admin')) {
			localStorage.setItem('authorization', 'admin');
		}
		setTimeout(() => {
			dispatch(showAuthorization(false));
		}, 500);
	};

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={s.form__field}
				placeholder={'Enter email address'}
				nameField={'email'}
				setValue={setValue}
				register={register}
				validation={{
					required: 'Required!',
					pattern:
						/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
					minLength: 6,
				}}
			/>
			<Input
				className={s.form__field}
				placeholder={'Enter  password'}
				nameField={'password'}
				setValue={setValue}
				register={register}
				type={'password'}
				validation={{
					required: 'Required!',
					pattern: {value: /^[A-Za-z0-9_\-.@]+$/},
					minLength: 6,
				}}
			/>
			<div className={s.form__link}>Forgot password?</div>
			<div className={s.accounts__list}>
				<Discord />
				<Twitter />
				<Telegram />
			</div>
			<Button className={s.form__btnSubmit} type='submit'>
				Log in
			</Button>
		</form>
	);
};

export default FormAuthorization;
