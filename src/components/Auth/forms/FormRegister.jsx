import React from 'react';
import s from './style.module.scss';
import Input from '../../ui/Input/Input';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import { showAuthorization } from '../../../core/store/slices/windowStateSlice';
import Button from '../../ui/buttons/Button/Button';
// import { registrationRequest } from "../../../store/actions/authorizationAction";

function FormRegister() {
	const dispatch = useDispatch();
	const {register, setValue, handleSubmit, watch} = useForm({
		mode: 'all',
		defaultValues: {
			isRemember: false,
		},
	});

	React.useEffect(() => {}, []);

	const onSubmit = (data, e) => {
		e.preventDefault();
		console.log('sign');
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
				placeholder={'Enter nickname'}
				nameField={'first_name'}
				setValue={setValue}
				register={register}
				validation={{
					required: 'Required!',
					pattern: {
						value: /^[A-Za-z0-9_\-.@]+$/,
					},
					maxLength: 20,
				}}
			/>
			<Input
				className={s.form__field}
				placeholder={'Enter  new password'}
				nameField={'password'}
				setValue={setValue}
				register={register}
				type={'password'}
				validation={{
					required: 'Required!',
					pattern: {
						value: /^[A-Za-z0-9_\-.@]+$/,
					},
					maxLength: 20,
				}}
			/>
			<Button className={s.form__btnSubmit} type='submit'>
				Sign up
			</Button>
		</form>
	);
}

export default FormRegister;
