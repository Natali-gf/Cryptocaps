import s from './style.module.scss';
import Select from 'react-select';

export default function CustomSelect(props) {

	return(
			<Select
				classNamePrefix={s.select}
				// className={cn(s.select)}
				getOptionValue={(option) => `${option[props.selectValue ?? 'value']}`}
				getOptionLabel={(option) => `${option[props.selectLabel ?? 'label']}`}
				noOptionsMessage={() => props.noOptionsMessage || 'Ops! It\'s empty...'}
				options={props.optionList}
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

	)
}
