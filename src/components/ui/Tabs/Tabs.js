import s from './style.module.scss';
import cn from 'classnames';

export default function Tabs({tabs, className}) {
	return (
		<div className={cn(s.tabs, className)}>
			{tabs.map((item, index) => (
				<div
					key={index}
					className={cn(s.tabs__tab, {
						[s.tabs__tab_active]: item.isActive,
					})}
					onClick={item.onClick}>
					{item.title}
				</div>
			))}
		</div>
	);
}
