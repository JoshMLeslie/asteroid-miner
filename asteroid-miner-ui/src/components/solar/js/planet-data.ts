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
				height: 26,
				width: 26,
			},
		},
		orbitalRadius: 90,
	},
	/*{
		label: 'Mimas',
		planetData: {
			imageName: 'planets',
			radius: 28,
			multiImageOffset: {
				x: 26,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 52,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 78,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 104,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 130,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 156,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 182,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 208,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 234,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 260,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
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
				x: 286,
				y: 0,
			},
			multiImageSize: {
				height: 26,
				width: 26,
			},
		},
		orbitalRadius: 376,
	},*/
];
