import { useLayoutEffect, useState } from 'react';
import { Stage } from 'react-konva';
import './App.css';
import { SolarMap } from './components/solar';
import SolarContext from './context/solar.context';

enum LAYERS {
	MAP = 'map',
}

/** @returns [height: number, width: number] */
function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerHeight, window.innerWidth]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

function App() {
	const [windowHeight, windowWidth] = useWindowSize();
	const [layer, setLayer] = useState(LAYERS.MAP);

	const RenderLayer = () => {
		switch (layer) {
			case LAYERS.MAP:
				return (
					<SolarMap windowHeight={windowHeight} windowWidth={windowWidth} />
				);
		}
	};

	return (
		<SolarContext>
			<Stage width={window.innerWidth} height={window.innerHeight}>
				<RenderLayer />
			</Stage>
		</SolarContext>
	);
}

export default App;
