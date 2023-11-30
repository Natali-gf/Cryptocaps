import noise, { perlin3 } from './noise';
import AnimationMesh from './AnimationMesh';
import React from 'react';

export default function AnimationSettings() {
	const seed = Math.floor(Math.random() * 2 ** 16);
	noise.seed(seed);

	const sampleNoize = (x, y, z) => {
		const theme = localStorage.globalTheme;
		let scale, octaves, persistence, lacunarity, amplitude, frequency;

		if(theme === 'dark') {
			scale = 1 / 5;
			octaves = 50;
			persistence = 0.7;
			lacunarity = 0.8;
			amplitude = 0.7;
			frequency = 0.6;
		} else if(theme === 'light') {
			scale = 1 / 5;
			octaves = 40;
			persistence = 0.3 ;
			lacunarity = 0.3;
			amplitude = 0.7;
			frequency = 0.6;
		}
		//*green
		// let scale = 1/5
		// let octaves = 40
		// let persistence = .7
		// let lacunarity = 0.8
		// let amplitude = .6
		// let frequency = .8
		//*green
		// let scale = 1/5
		// let octaves = 40
		// let persistence = .7
		// let lacunarity = 0.8
		// let amplitude = .6
		// let frequency = .8

		//*try
		// let scale = 1 / 5;
		// let octaves = 40;
		// let persistence = 0.3;
		// let lacunarity = 0.6;
		// let amplitude = 0.7;
		// let frequency = 0.6;
		//*dark
		// let scale = 1 / 5;
		// let octaves = theme === 'dark' ? 50 : 40;
		// let persistence = theme === 'dark' ? 0.7 : 0.3 ;
		// let lacunarity = theme === 'dark' ? 0.8 : 0.3;
		// let amplitude = theme === 'dark' ? 0.7 : 0.7;
		// let frequency = theme === 'dark' ? 0.6 : 0.6;

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
		const theme = localStorage.globalTheme;

		if(theme === 'dark') {
			return {
				r: z / 1.1,
				g: z / 1.5,
				b: z / .5,
			}
		} else if(theme === 'light') {
			return {
				r: z / 1.2,
				g: z / .4,
				b: z,
			}
		}
		// return {
			//*try
			// r: z / 1.2,
			// g: z / .4,
			// b: z,
			//*dark
			// r: theme === 'dark' ? z / 1.1 : z / 1.2,
			// g: theme === 'dark' ? z / 1.5 : z / .4 ,
			// b: theme === 'dark' ? z / 0.5 : z,
			//*green
			// r: z+.8,
			// g: z+.5,
			// b: z+1.2
			//*light
			// r: z+.8,
			// g: z+.45,
			// b: z+1.2
		// };
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
				update: (t) => t + 0.002,
			}}
		/>
	);
}
