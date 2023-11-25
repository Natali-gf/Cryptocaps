import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export default function NavigationLink ({children, to, className, activeClassName, ...props}) {
	const activeClass = ({isActive}) => (isActive ?
					cn(s.navlink_active, s.navlink, activeClassName, className) :
					cn(s.navlink, className));

	function handleClick(e) {
		if(props.disabled) e.preventDefault();
	}

	return (
		<NavLink className={activeClass}
			to={to}
			onClick={handleClick}
			{...props}>
			{children}
		</NavLink>
	);
};
