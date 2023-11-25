// import './select-style.scss';
// import style from '../Input/style.module.scss';
import s from './style.module.scss';
import Select from 'react-select'
import cn from 'classnames';

const styleProxy = new Proxy({}, {
	  get: () => () => {}
});

export default function CustomSelect(props) {
	const options = [
		{
			label: 'tra-ta-t', value: 'tra-ta-t'
		},
		{
			label: 'tra-ta-ta', value: 'tra-ta-ta'
		}
	]

	return(
		// <div className={cn(s.select, props.className)}>
			<Select
				// styles={styleProxy}
				classNamePrefix={s.select}
				className={cn(s.select)}
				getOptionValue={(option) => `${option[props.selectValue ?? 'value']}`}
				getOptionLabel={(option) => `${option[props.selectLabel ?? 'label']}`}
				noOptionsMessage={() => props.noOptionsMessage || 'Ops! It\'s empty...'}
				// options={props.optionList}
				options={options}
				defaultValue={props.defaultValue}
				onChange={props.onChange}
				value={props.value}
				hideSelectedOptions={false}
				isSearchable={false}
				placeholder={props.placeholder}
				isDisabled={props.isDisabled}
				isClearable={props.isClearable}
				{...props}
				// menuIsOpen={true}
				// isMulti
			/>
		// </div>

	)
}
