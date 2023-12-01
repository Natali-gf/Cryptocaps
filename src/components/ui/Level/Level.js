import s from './style.module.scss';
import cn from 'classnames';

export default function Level({className, skillName, currentLevel, maxLevel = 6}) {
	const levelParts = [];
	for (let i = 0; i < maxLevel; i++) {
		levelParts.push({isGot: currentLevel > i ? true : false});
	}
console.log(skillName)
	return (
		<div className={cn(s.level, className)}>
			{levelParts.map((item, index) => (
				<div
					key={index}
					className={cn(s.level__point, {
						[s[`level__point_${skillName}`]]: item.isGot,
					})}/>
			))}
		</div>
	);
}
