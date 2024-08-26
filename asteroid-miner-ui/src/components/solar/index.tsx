import { useEffect } from 'react';
import { Layer } from 'react-konva';
import { useSolarContext } from '../../context/solar.context';
import util from '../../util/util';
import OrbitalPlanet from './js/orbit';
import { orbitalPlanets } from './js/planet-data';
import { SolarSun } from './js/sun';

export const SolarMap = () => {
	const solarContext = useSolarContext();

	useEffect(() => {
		solarContext?.setOrbit({
			solarCenter: util.Size({
				height: window.innerHeight / 2,
				width: window.innerWidth / 2,
			}),
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Layer>
			<SolarSun />
			{orbitalPlanets.map((planet) => {
				return (
					<OrbitalPlanet
						key={planet.label}
						planetData={planet.planetData}
						orbitalRadius={planet.orbitalRadius}
					/>
				);
			})}
		</Layer>
	);
};
