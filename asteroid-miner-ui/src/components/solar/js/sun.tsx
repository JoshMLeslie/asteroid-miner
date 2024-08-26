import SolarPlanet, { SolarPlanetProps } from './planet';

export const SolarSun = () => {
	const radius = 100; //px
	const sunData: SolarPlanetProps['planetData'] = {
		imageName: 'sun',
		radius,
	};

	return <SolarPlanet planetData={sunData} />;
};
