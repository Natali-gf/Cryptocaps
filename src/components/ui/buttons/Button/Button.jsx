import React from "react";
import cn from "classnames";
import s from './style.module.scss';

function Button({className, children, onClick, isDisabled, ...props}) {

	return (
		<button
			className={cn(s.button, className)}
			onClick={onClick}
			disabled={isDisabled}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
