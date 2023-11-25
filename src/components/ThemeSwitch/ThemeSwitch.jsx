import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import {ThemeContext} from '../../core/theme/ThemeContext';
import Button from '../ui/buttons/Button/Button';

function ThemeSwitch() {
	const {theme, setTheme} = React.useContext(ThemeContext);

	React.useEffect(() => {}, []);

	return (
		<>
			<div className={s.switch}>
				<Button
					className={cn(s.switch__button, {[s.switch__button_active]: theme === 'light'})}
					onClick={() => setTheme('light')}>
					Light
				</Button>
				<Button
					className={cn(s.switch__button, {[s.switch__button_active]: theme === 'dark'})}
					onClick={() => setTheme('dark')}>
					Dark
				</Button>
			</div>
		</>
	);
}

export default ThemeSwitch;
