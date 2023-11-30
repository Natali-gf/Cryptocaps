import {Canvas} from '@react-three/fiber';
import AnimationSettings from './AnimationSettings';
import './style.scss';

function AnimationCanvas() {
	return (
		<div className={'container'}>
			<div className={'animation'}>
				<Canvas camera={{position: [0, 3, 10], fov: 75}}>
					<ambientLight />
					<AnimationSettings />
				</Canvas>
			</div>
		</div>
	);
}

export default AnimationCanvas;
