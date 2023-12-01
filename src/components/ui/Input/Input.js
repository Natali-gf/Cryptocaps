import s from './style.module.scss';
import cn from 'classnames';
import React from 'react';
import { PatternFormat } from 'react-number-format';

export default function Input(props) {
	const [inputValue, setInputValue] = React.useState(props.defaultValue || '');
	const [typeInput, setTypeInput] = React.useState(props.type);
	const inputRef = React.useRef();

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.name === 'clearButton') {
			if (props.setValue) {
				props.setValue(props.nameField, '');
			} else {
				setInputValue('');
			}
		} else {
			if (props.type === 'number') {
				setInputValue(e.target.value.replace(/\D/g, ''));
			} else {
				setInputValue(e.target.value);
			}
		}
	};

	const showPassword = (e) => {
		e.preventDefault();
		setTypeInput(typeInput === 'password' ? 'text' : 'password');
	};

	return (
		<div
			className={cn(
				s.field,
				{[s.field_error]: props.classError},
				props.className
			)}>
			{!props.format && (
				<input
					className={s.field__input}
					type={typeInput || 'text'}
					accept={props.accept}
					placeholder={props.placeholder}
					disabled={props.isDisabled}
					pattern={props.pattern}
					name={props.nameField || props.name}
					autoComplete={props.autoComplete || 'off'}
					onChange={props.onChange || handleChange}
					{...(props.nameField ? {} : {value: inputValue})}
					{...(props.nameField ? {} : {ref: inputRef})}
					{...(props.register
						? {...props.register(props.nameField, props.validation)}
						: '')}
				/>
			)}
			{props.format && (
				<PatternFormat
					className={s.field__input}
					autoComplete={props.autoComplete || 'off'}
					placeholder={props.placeholder}
					format={props.format}
					patternChar={props.patternChar}
					mask={props.mask}
					value={props.watch}
					onValueChange={props.onValueChange}
					defaultValue={props.defaultValue}
					disabled={props.isDisabled}
				/>
			)}
			{/* {props.type === 'password' && (
				<button
					className={cn(s.field__password, 'icon_eye_close', {
						[cn(s.field__password_show, 'icon_eye_open')]:
						typeInput === 'text',
					})}
					type={'button'}
					onClick={showPassword}>
				</button>
			)} */}
		</div>
	);
}
