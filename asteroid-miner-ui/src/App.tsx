import './App.css';
import { SolarMap } from './components/solar';
import SolarContext from './context/solar.context';

function App() {
	return (
		<SolarContext>
			<SolarMap />
		</SolarContext>
	);
}

export default App;
