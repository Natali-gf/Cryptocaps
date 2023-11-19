import noise, { perlin3 } from './noise';
import AnimationMesh from './AnimationMesh';

export default function AnimationSettings() {
	const seed = Math.floor(Math.random() * 2 ** 16);
	noise.seed(seed);

	const sampleNoize = (x, y, z) => {
		//*green
		// let scale = 1/5
		// let octaves = 40
		// let persistence = .7
		// let lacunarity = 0.8
		// let amplitude = .6
		// let frequency = .8

		//*dark
		let scale = 1 / 5;
		let octaves = 50;
		let persistence = 0.7;
		let lacunarity = 0.8;
		let amplitude = 0.7;
		let frequency = 0.6;

		//*light
		// let scale = 1/6
		// let octaves = 20
		// let persistence = .5
		// let lacunarity = 2
		// let amplitude = .6
		// let frequency = .8

		let v = 0;
		for (let i = 0; i < octaves; i++) {
			v += amplitude * perlin3(x * frequency * scale, y * frequency * scale, z);
			amplitude *= persistence;
			frequency *= lacunarity;
		}

		return v;
	};

	const positioning = (x, y, t) => {
		return sampleNoize(x, y, t);
	};

	const colorizing = (z) => {
		return {
			//*dark
			r: z / 1.1,
			g: z / 1.5,
			b: z / 0.5,
			//*green
			// r: z+.8,
			// g: z+.5,
			// b: z+1.2
			//*light
			// r: z+.8,
			// g: z+.45,
			// b: z+1.2
		};
	};

	return (
		<AnimationMesh
			position={[0, 0, 0]}
			rotation={[-Math.PI / 2, 0, 0]}
			grid={{
				width: 70,
				height: 50,
				sep: 1,
			}}
			positioning={positioning}
			colorizing={colorizing}
			anim={{
				init: 0,
				update: (t) => t + 0.001,
			}}
		/>
	);
}
