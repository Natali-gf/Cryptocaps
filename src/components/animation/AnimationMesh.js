import React, {useMemo, useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import * as THREE from 'three';

export default function AnimationMesh({
	position,
	rotation,
	grid,
	positioning,
	colorizing,
	anim: {init, update},
}) {
	const theme = localStorage.globalTheme;
	React.useEffect(() => {

	}, [theme])
	console.log(theme)
	let t = init;

	const {positions, colors, normals} = useMemo(() => {
		let positions = [];
		let colors = [];
		let normals = [];

		for (let yi = 0; yi < grid.height; yi++) {
			for (let xi = 0; xi < grid.width; xi++) {
				let x = grid.sep * (xi - (grid.width - 1) / 2);
				let y = grid.sep * (yi - (grid.height + 1) / 2);
				let z = positioning(x, y, t);
				positions.push(x, y, z);

				let color = colorizing(z, theme);
				colors.push(color.r, color.g, color.b);

				normals.push(0, 0, 1);
			}
		}

		return {
			positions: new Float32Array(positions),
			colors: new Float32Array(colors),
			normals: new Float32Array(normals),
		};
	}, [grid.width, grid.height, grid.sep, positioning, colorizing, t]);

	const indices = useMemo(() => {
		let indices = [];
		let i = 0;
		for (let yi = 0; yi < grid.height - 1; yi++) {
			for (let xi = 0; xi < grid.width - 1; xi++) {
				indices.push(i, i + 1, i + grid.width + 1);
				indices.push(i + grid.width + 1, i + grid.width, i);
				i++;
			}
			i++;
		}
		return new Uint16Array(indices);
	}, [grid.width, grid.height]);

	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute(
		'position',
		new THREE.BufferAttribute(new Float32Array(positions), 3)
	);
	geometry.setAttribute(
		'color',
		new THREE.BufferAttribute(new Float32Array(colors), 3)
	);
	geometry.setAttribute(
		'normal',
		new THREE.BufferAttribute(new Float32Array(normals), 3)
	);
	geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));

	//-------------update----------------
	const posRef = useRef(geometry.getAttribute('position'));
	const colorRef = useRef(geometry.getAttribute('color'));

	useFrame(() => {
		t = update(t);

		const positions = posRef.current.array;
		const colors = colorRef.current.array;

		let i = 0;
		for (let yi = 0; yi < grid.height; yi++) {
			for (let xi = 0; xi < grid.width; xi++) {
				positions[i + 2] = positioning(positions[i], positions[i + 1], t);

				let c = colorizing(positions[i+2]);
				colors[i] = c.r;
				colors[i + 1] = c.g;
				colors[i + 2] = c.b;
				i += 3;
			}
		}

		posRef.current.needsUpdate = true;
		colorRef.current.needsUpdate = true;
	});

	return (
		<mesh position={position} rotation={rotation}>
			<bufferGeometry attach={'geometry'} {...geometry} />
			<meshStandardMaterial
				vertexColors
				side={THREE.DoubleSide}
				wireframe={true}
			/>
		</mesh>
	);
}