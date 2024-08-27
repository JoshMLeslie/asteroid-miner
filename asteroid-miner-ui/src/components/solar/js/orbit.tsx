import React, { useState } from 'react';
import { Circle, Group } from 'react-konva';
import { useSolarContext } from '../../../context/solar.context';
import SolarPlanet, { SolarPlanetProps } from './planet';

export interface OrbitProps extends SolarPlanetProps {
	orbitalRadius: number; // px
}

const OrbitalPlanet: React.FC<OrbitProps> = ({
	planetData,
	orbitalRadius: orbitRadius,
}) => {
	const [hover, setHover] = useState(false);
	const solarContext = useSolarContext();
	if (!solarContext) {
		return <></>;
	}

	const solarCenter = solarContext.orbit.solarCenter.toXY();

	// const isTriggerPoint = useCallback(
	// 	(point: {x: number; y: number}) => {
	// 		const distance = Math.sqrt(
	// 			Math.pow(point.x - solarCenter.x, 2) +
	// 				Math.pow(point.y - solarCenter.y, 2)
	// 		);
	// 		return Math.abs(planetData.radius - distance) < 13;
	// 	},
	// 	[solarCenter, planetData.radius]
	// );

	return (
		<Group>
			{hover ? (
				<Circle
					radius={orbitRadius}
					{...solarCenter}
					strokeWidth={3}
					fillEnabled={false}
					stroke={'rgb(0,192,255)'}
					onMouseLeave={() => setHover(false)}
				/>
			) : (
				<Circle
					radius={orbitRadius}
					{...solarCenter}
					strokeWidth={3}
					fillEnabled={false}
					stroke={'rgba(0,192,255,0.5)'}
					onMouseEnter={() => setHover(true)}
				/>
			)}
			<SolarPlanet
				planetData={{
					...planetData,
					initialCenter: {
						x: orbitRadius + solarCenter.x - planetData.radius / 2,
						y: -1,
					},
				}}
				onHover={setHover}
			/>
		</Group>
	);
};

export default OrbitalPlanet;
