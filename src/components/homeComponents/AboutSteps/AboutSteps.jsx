import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import star from "../../../assets/icons/star.svg";

function AboutSteps({className}) {
	return (
		<div className={cn(s.instruction, className)}>
			<div className={s.instruction__title}>How it works</div>
			<div className={s.instruction__steps}>
				<div className={cn(s.step, s.step_first)}>
					<div className={cn(s.step__number, s.step__number_first)}>1</div>
					<div className={s.step__title}>Create a profile and wallet</div>
					<div className={s.step__description}>
						Build a trustworthy profile and unlock tremendous CRYPTOCAPS values
					</div>
					<Link className={s.step__link}>View my profile</Link>
				</div>
				<div className={cn(s.step, s.step_second)}>
					<div className={cn(s.step__number, s.step__number_first)}>2</div>
					<div className={s.step__title}>Complete tasks</div>
					<div className={s.step__description}>
						Build a trustworthy profile and unlock tremendous CRYPTOCAPS values
					</div>
					<Link className={s.step__link}>View my profile</Link>
				</div>
				<div className={cn(s.step, s.step_third)}>
					<div className={cn(s.step__number, s.step__number_first)}>3</div>
					<div className={s.step__title}>Get reward</div>
					<div className={s.step__description}>
						Subscribe to partners, complete quests and receive rewards
					</div>
					<Link className={s.step__link}>View my profile</Link>
				</div>
			</div>
		</div>
	)
}

export default AboutSteps;
