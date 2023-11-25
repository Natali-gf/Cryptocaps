import React from "react";
import cn from "classnames";
import s from './style.module.scss';

function BorderTag({className, children, onClick, isDisabled, ...props}) {

	return (
		<div
			className={cn(s.tag, className)}
			{...props}>
			{children}
		</div>
	);
};

export default BorderTag;
