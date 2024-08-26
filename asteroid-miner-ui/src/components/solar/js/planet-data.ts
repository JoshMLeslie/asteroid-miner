import { OrbitProps } from './orbit';

interface PlanetData extends OrbitProps {
	label: string;
}

export const orbitalPlanets: PlanetData[] = [
	{
		label: 'Selene',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 0,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 90,
	},
	{
		label: 'Mimas',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 24,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 116,
	},
	{
		label: 'Ares',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 48,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 142,
	},
	{
		label: 'Enceladus',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 72,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 168,
	},
	{
		label: 'Tethys',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 96,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 194,
	},
	{
		label: 'Dione',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 120,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 220,
	},
	{
		label: 'Zeus',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 144,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 246,
	},
	{
		label: 'Rhea',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 168,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 272,
	},
	{
		label: 'Titan',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 192,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 298,
	},
	{
		label: 'Janus',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 216,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 324,
	},
	{
		label: 'Hyperion',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 240,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 350,
	},
	{
		label: 'Iapetus',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 264,
				y: 0,
			},
			multiImageSize: {
				height: 24,
				width: 24,
			},
		},
		orbitalRadius: 376,
	},
];
