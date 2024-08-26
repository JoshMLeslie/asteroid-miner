import ReactDOM from 'react-dom/client';
import { Stage } from 'react-konva';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
		<div id="center-debug_v"></div>
		<div id="center-debug_h"></div>
		<Stage width={window.innerWidth} height={window.innerHeight}>
			<App />
		</Stage>
	</>
);
