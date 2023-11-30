import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import BorderBlock from '../ui/tags/BorderBlock/BorderBlock';

function Hint({className, children}) {

	return (
		<>
			<BorderBlock className={cn(s.hint, className)}>
				<h4 className={s.hint__title}>Hint</h4>
				<div className={s.hint__text}>{children}</div>
			</BorderBlock>
		</>
	);
}

export default Hint;
