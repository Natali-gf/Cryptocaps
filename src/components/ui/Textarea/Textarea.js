import style from './style.module.scss';
import cn from 'classnames';
import React from 'react';

export default function Textarea(props) {
	const [inputValue, setInputValue] = React.useState(props.defaultValue || '');
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


	return (
		<div className={cn(style.field, props.className)}>
			<textarea
				className={style.field__textarea}
				rows={10}
				tabIndex={props.tabIndex}
				name={props.nameField || props.name}
				placeholder={props.placeholder}
				onChange={props.onChange || handleChange}
				onKeyDown={props.onKeyDown}
				{...(props.nameField ? {} : {value: inputValue})}
				{...(props.nameField ? {} : {ref: inputRef})}
				{...(props.register
					? {...props.register(props.nameField, props.validation)}
					: '')}
			/>
		</div>
	);
}
