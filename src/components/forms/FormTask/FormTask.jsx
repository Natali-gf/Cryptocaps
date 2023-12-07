import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../ui/buttons/Button/Button';
import Input from '../../ui/Input/Input';
import {useForm} from 'react-hook-form';
import CustomSelect from '../../ui/select/Select';
import {
	QuestPeriodicity,
	questLevel,
	socials,
	taskCategory,
	type,
} from '../../../core/constants/data/questForm';
import Checkbox from '../../ui/Checkbox/Checkbox';
import Textarea from '../../ui/Textarea/Textarea';
import { Link } from 'react-router-dom';

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
	const [fieldKeyWords, setFieldKeyWords] = React.useState(false);
	const [fieldNft, setFieldNft] = React.useState(false);
	const [fieldImg, setFieldImg] = React.useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		formState: {isValidating},
	} = useForm({mode: 'all'});

	React.useEffect(() => {
		// register fields
	}, []);

	React.useEffect(() => {}, [isValidating]);

	const onSubmit = async (data, e) => {
		e.preventDefault();
	};

	function chooseCategory(e) {
		setValue('category', e);
		if (e.value === 'post') {
			setFieldKeyWords(true);
		} else {
			setFieldKeyWords(false);
		}
	}

	return (
		<>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.form__fields}>
					<div className={cn(s.form__field, s.field)}>
						<div className={s.field__title}>Title:</div>
						<Input
							className={s.field__input}
							placeholder={'...'}
							nameField={'title'}
							setValue={setValue}
							register={register}
							validation={{required: 'Required!', maxLength: 50}}
						/>
					</div>
					<div className={cn(s.form__field, s.field, s.field_select)}>
						<div className={s.field__title}>Level:</div>
						<div className={cn(s.field__select)}>
							<CustomSelect
								optionList={questLevel}
								placeholder={'Select a level...'}
								onChange={(e) => setValue('level', e)}
							/>
						</div>
					</div>
					<div className={cn(s.form__field, s.field, s.field_select)}>
						<div className={s.field__title}>Category:</div>
						<div className={cn(s.field__select)}>
							<CustomSelect
								optionList={taskCategory}
								placeholder={'Select a category...'}
								onChange={chooseCategory}
							/>
						</div>
					</div>
					{fieldKeyWords && (
						<div className={cn(s.form__field, s.field)}>
							<div className={s.field__title}>Keywords:</div>
							<Input
								className={s.field__input}
								placeholder={'Enter keywords separated by commas...'}
								nameField={'keywords'}
								setValue={setValue}
								register={register}
								validation={{required: 'Required!', maxLength: 50}}
							/>
						</div>
					)}
					<div className={cn(s.form__field, s.field, s.field_select)}>
						<div className={s.field__title}>Type:</div>
						<div className={cn(s.field__select)}>
							<CustomSelect
								optionList={type}
								placeholder={'Select a type...'}
								onChange={(e) => setValue('type', e)}
							/>
						</div>
					</div>
					<div className={cn(s.form__field, s.field, s.field_term)}>
						<div className={s.field__title}>Start date:</div>
						<div className={cn(s.field__subtitle_date, s.field__subtitle)}>Date:</div>
						<div className={cn(s.field__subtitle_time, s.field__subtitle)}>Time:</div>
						<Input
							className={cn(s.field__input, s.field__input_date)}
							placeholder={'0000-00-00'}
							format='####-##-##'
							patternChar='#'
							allowFormatting
							mask='_ '
							onValueChange={(values) => {
								setValue('startDate', values.formattedValue);
								setError('startDate', {
									required: 'Обязательное поле!',
									minLength: 10,
									maxLength: 10,
								});
							}}
							nameField={'startDate'}
							setValue={setValue}
						/>
						<Input
							className={cn(s.field__input, s.field__input_time)}
							placeholder={'00:00:00'}
							format='##:##:##'
							patternChar='#'
							allowFormatting
							mask='_ '
							onValueChange={(values) => {
								setValue('startTime', values.formattedValue);
								setError('startTime', {
									required: 'Обязательное поле!',
									minLength: 8,
									maxLength: 8,
								});
							}}
							nameField={'startTime'}
							setValue={setValue}
						/>
						<div className={cn(s.field__tools, s.field__tools_date)}>
							<Button className={s.tools__button}>Today</Button>
							<div className={s.tools__separator}></div>
							<Button className={cn(s.tools__button_date, 'icon_calendar')} />
						</div>
						<div className={cn(s.field__tools, s.field__tools_time)}>
							<Button className={s.tools__button}>Time</Button>
							<div className={s.tools__separator}></div>
							<Button className={cn(s.tools__button_time, 'icon_clock')} />
						</div>
					</div>
					<div className={cn(s.form__field, s.field, s.field_term)}>
						<div className={s.field__title}>End date:</div>
						<div className={cn(s.field__subtitle_date, s.field__subtitle)}>Date:</div>
						<div className={cn(s.field__subtitle_time, s.field__subtitle)}>Time:</div>
						<Input
							className={cn(s.field__input, s.field__input_date)}
							placeholder={'0000-00-00'}
							format='####-##-##'
							patternChar='#'
							allowFormatting
							mask='_ '
							onValueChange={(values) => {
								setValue('endDate', values.formattedValue);
								setError('endDate', {
									required: 'Обязательное поле!',
									minLength: 10,
									maxLength: 10,
								});
							}}
							nameField={'endDate'}
							setValue={setValue}
						/>
						<Input
							className={cn(s.field__input, s.field__input_time)}
							placeholder={'00:00:00'}
							format='##:##:##'
							patternChar='#'
							allowFormatting
							mask='_ '
							onValueChange={(values) => {
								setValue('endTime', values.formattedValue);
								setError('endTime', {
									required: 'Обязательное поле!',
									minLength: 8,
									maxLength: 8,
								});
							}}
							nameField={'endTime'}
							setValue={setValue}
						/>
						<div className={cn(s.field__tools, s.field__tools_date)}>
							<Button className={s.tools__button}>Today</Button>
							<div className={s.tools__separator}></div>
							<Button className={cn(s.tools__button_date, 'icon_calendar')} />
						</div>
						<div className={cn(s.field__tools, s.field__tools_time)}>
							<Button className={s.tools__button}>Time</Button>
							<div className={s.tools__separator}></div>
							<Button className={cn(s.tools__button_time, 'icon_clock')} />
						</div>
					</div>
					<div className={cn(s.form__field, s.field)}>
						<div className={s.field__title}>Description:</div>
						<Textarea
							className={s.field__input}
							nameField={'description'}
							setValue={setValue}
							register={register}
							validation={{required: 'Обязательное поле!', maxLength: 100}}
						/>
					</div>
					<div className={cn(s.form__field, s.field)}>
						<div className={s.field__title}>Taskpic:</div>
						<div className={cn(s.field__input, s.field__input_img)}>
							<input
								name='fileImg'
								type='file'
								accept='image*'
								id='fieldNft'
								onChange={(e) =>
									setFieldNft(e.target.value.match(/\\([^\\]+)$/)[0].slice(1))
								}
							/>
							<label className={cn(s.field__label, s.label)}>
								<div className={s.label__uploadButton}>Upload a file</div>
								<div className={s.label__text}>{fieldNft || 'File not selected'}</div>
							</label>
						</div>
					</div>
					<div className={cn(s.form__field, s.field, s.field_select)}>
						<div className={s.field__title}>Social network:</div>
						<div className={cn(s.field__select)}>
							<CustomSelect
								optionList={socials}
								placeholder={'Select a social network...'}
								onChange={(e) => setValue('award', e)}
							/>
						</div>
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
					<div className={cn(s.form__field, s.field, s.field_award)}>
						<div className={s.field__title}>Award:</div>
						<Checkbox className={s.field__check_token} children={'Token'} />
						<Input
							className={cn(s.field__input, s.field__input_token)}
							nameField={'awardToken'}
							setValue={setValue}
							register={register}
							validation={{required: 'Обязательное поле!', maxLength: 100}}
						/>
						<Checkbox className={s.field__check_nft} children={'NFT'} />
						<div className={cn(s.field__input, s.field__input_nft)}>
							<input
								name='fileNft'
								type='file'
								accept='image*'
								id='fieldNft'
								onChange={(e) =>
									setFieldImg(e.target.value.match(/\\([^\\]+)$/)[0].slice(1))
								}
							/>
							<label className={cn(s.field__label, s.label)}>
								<div className={s.label__uploadButton}>Upload a file</div>
								<div className={s.label__text}>{fieldImg || 'File not selected'}</div>
							</label>
						</div>
						<Checkbox className={s.field__check_points} children={'Points'} />
						<Input
							className={cn(s.field__input, s.field__input_points)}
							nameField={'awardPoints'}
							setValue={setValue}
							register={register}
							validation={{required: 'Обязательное поле!', maxLength: 100}}
						/>
					</div>
					<div className={cn(s.form__field, s.field, s.field_select)}>
						<div className={s.field__title}>Periodicity:</div>
						<div className={cn(s.field__select)}>
							<CustomSelect
								optionList={QuestPeriodicity}
								placeholder={'Select a periodicity...'}
								onChange={(e) => setValue('status', e)}
							/>
						</div>
					</div>
				</div>
				<div className={cn(s.form__buttons)}>
					<Link to={'/admin/plan'} className={cn(s.button_submit)} htmltype='submit'>
						Save
					</Link>
					<Button className={cn(s.button_submit)} htmltype='submit' onClick={() => {}}>
						Save and add another
					</Button>
				</div>
			</form>
		</>
	);
}

export default FormTask;
