import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
// import {fetchLeaderboard} from '../../core/store/slices/leaderboard';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../ui/buttons/Button/Button';
import Input from '../../ui/Input/Input';
import {useForm} from 'react-hook-form';
import CustomSelect from '../../ui/select/Select';

export const taskFormFields = [
	'name',
	'duration',
	'year',
	'is_published',
	'category',
	'copyright_holder',
	'language',
	'age',
];

function FormTask() {
	const dispatch = useDispatch();
	// const { filmData, errorView } = useSelector(state => state.films);
	// const [ imgsrc, setImgsrc] = React.useState('');

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		getValues,
		formState: {errors, isDirty, isValidating},
		watch,
	} = useForm({mode: 'all'});
	// const [nameWatch, durationWatch, yearWatch] = watch(filmFormFields);

	React.useEffect(() => {
		// register fields
		register('card_task', {required: 'Обязательное поле!'});
		register('level', {required: 'Обязательное поле!'});
		register('category', {required: 'Обязательное поле!'});
		register('type', {required: 'Обязательное поле!'});
		register('end_date', {required: 'Обязательное поле!'});
		register('end_time', {required: 'Обязательное поле!'});
		register('award', {required: 'Обязательное поле!'});
		register('website', {required: 'Обязательное поле!'});
		register('status', {required: 'Обязательное поле!'});
		register('image');
	}, []);

	React.useEffect(() => {}, [isValidating]);

	const onSubmit = async (data, e) => {
		e.preventDefault();
	};

	return (
		<>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Card Task:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'...'}
							onChange={(e) => setValue('card_task', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Level:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'Select a level...'}
							onChange={(e) => setValue('level', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Category:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'Select a category...'}
							onChange={(e) => setValue('category', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Type:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'Select a type...'}
							onChange={(e) => setValue('type', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Category:</div>
					<div className={s.field__subtitle}>
						<div className={s.field__title}>Date:</div>
						<div className={s.field__title}>Time:</div>
					</div>
					<Input
						className={s.field__input}
						placeholder={'0000-00-00'}
						format='####-##-##'
						patternChar='#'
						allowFormatting
						mask='00'
						// value={durationWatch}
						onValueChange={(values) => {
							setValue('date', values.formattedValue);
							setError('date', {
								required: 'Обязательное поле!',
								minLength: 10,
								maxLength: 10,
							});
						}}
						nameField={'date'}
						setValue={setValue}
					/>
					<Input
						className={s.field__input}
						placeholder={'00:00:00'}
						format='##:##:##'
						patternChar='#'
						allowFormatting
						mask='00'
						// value={durationWatch}
						onValueChange={(values) => {
							setValue('time', values.formattedValue);
							setError('time', {
								required: 'Обязательное поле!',
								minLength: 8,
								maxLength: 8,
							});
						}}
						nameField={'time'}
						setValue={setValue}
					/>
					<div className={cn(s.field__tools, s.tools)}>
						<div className={cn(s.tools__date)}>
							<Button className={s.tools__button}>Today</Button>
							<Button className={s.tools__button_date}></Button>
						</div>
						<div className={cn(s.tools__time)}>
							<Button className={s.tools__button}>Time</Button>
							<Button className={s.tools__button_time}></Button>
						</div>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Taskpic:</div>
					<input
						className={s.field__input}
						type='file'
						accept='image*'
						name={'image'}
						// ref={imgInputRef}
						onChange={(e) => {}}
					/>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Website:</div>
					<Input
						className={s.field__input}
						nameField={'website'}
						setValue={setValue}
						register={register}
						validation={{required: 'Обязательное поле!', maxLength: 100}}
					/>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Award:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'Select a award...'}
							onChange={(e) => setValue('award', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Creator:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'...'}
							onChange={(e) => setValue('creator', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__field, s.field)}>
					<div className={s.field__title}>Type:</div>
					<div className={cn(s.field__select)}>
						<CustomSelect
							// optionList={copyright}
							placeholder={'Select a status...'}
							onChange={(e) => setValue('status', e)}
						/>
					</div>
				</div>
				<div className={cn(s.form__buttons)}>
					<Button className={cn(s.form__button_submit)} htmlType='submit'>
						Save
					</Button>
					<Button
						className={cn(s.form__button_submit)}
						htmlType='submit'
						onClick={() => {}}>
						Save
					</Button>
				</div>
			</form>
		</>
	);
}

export default FormTask;
