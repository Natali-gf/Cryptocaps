import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

function Mascot() {
	const slideRef = React.useRef();
	const [slider, setSlider] = React.useState(1);

	React.useEffect(() => {
		if (slideRef.current) {
			clearInterval(slideRef.current);
		}
		slideRef.current = setInterval(() => {
			setSlider((prev) => (prev === 12 ? 0 : prev + 1));
		}, 12000);
	}, [slider]);

	return (
		<>
			<div className={cn(s.mascot)}>
				<img
					src='/mascot_flying.gif'
					className={s.mascot__animation}
					autoPlay
					loop
					muted
					playsInline
					style={{
						transition: `transform 12s ${slider > 5 ? 'linear' : 'ease-in-out'} `,
						transform:
							slider === 0
								? 'translateX(-100px) scaleX(-1)'
								: slider === 1
								? 'translateX(-100px) scaleX(-1)'
								: slider === 2
								? 'translateY(-3000px) translateX(1500px) scaleX(-1)'
								: slider === 3
								? 'translateY(-1000px) translateX(1000px) scaleX(0.8) scaleY(0.8)'
								: slider === 4
								? 'translateY(0) translateX(1150px) scaleX(0.8) scaleY(0.8)'
								: slider === 5
								? 'translateY(0) translateX(1150px) scaleX(0.8) scaleY(0.8)'
								: slider === 6
								? 'translateY(-10px) translateX(950px) scaleX(0.5) scaleY(0.5)'
								: slider === 7
								? 'translateY(10px) translateX(500px) scaleX(0.5) scaleY(0.5)'
								: slider === 8
								? 'translateY(10px) translateX(-100px) scaleX(0.6) scaleY(0.6)'
								: slider === 9
								? 'translateY(20px) translateX(-600px) scaleX(0.7) scaleY(0.7)'
								: slider === 10
								? 'translateY(30px) translateX(-800px) scaleX(0.7) scaleY(0.7)'
								: slider === 11
								? 'translateY(-100px) translateX(-1000px) scaleX(-1)'
								: 'translateX(-100px) scaleX(-1)',
					}}></img>
			</div>
		</>
	);
}

export default Mascot;
