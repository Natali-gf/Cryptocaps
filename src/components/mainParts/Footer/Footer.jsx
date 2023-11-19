import s from './style.module.scss';
import cn from 'classnames';

export default function Footer ({title, subtitle, className}) {
	return (
		<footer className={cn(s.footer, className)}>

		</footer>
	);
}
