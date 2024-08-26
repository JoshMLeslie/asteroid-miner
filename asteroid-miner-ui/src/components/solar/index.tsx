import { useEffect } from 'react';
import { Layer } from 'react-konva';
import { useSolarContext } from '../../context/solar.context';
import util from '../../util/util';
import OrbitalPlanet from './js/orbit';
import { orbitalPlanets } from './js/planet-data';
import { SolarSun } from './js/sun';

export const SolarMap: React.FC<{
	windowHeight: number;
	windowWidth: number;
}> = ({windowHeight, windowWidth}) => {
	const solarContext = useSolarContext();

	useEffect(() => {
		solarContext?.setOrbit({
			solarCenter: util.Size({
				height: windowHeight / 2,
				width: windowWidth / 2,
			}),
		});
	}, [windowHeight, windowWidth]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Layer>
			<SolarSun />
			{orbitalPlanets.map((planet) => (
				<OrbitalPlanet
					key={planet.label}
					planetData={planet.planetData}
					orbitalRadius={planet.orbitalRadius}
				/>
			))}
		</Layer>
	);
};
