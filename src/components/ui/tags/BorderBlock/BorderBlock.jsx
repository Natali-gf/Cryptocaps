import React from "react";
import cn from "classnames";
import s from './style.module.scss';

function BorderBlock({className, children, onClick, isDisabled, ...props}) {

	return (
		<div
			className={cn(s.block, className)}
			{...props}>
			{children}
		</div>
	);
};

export default BorderBlock;
