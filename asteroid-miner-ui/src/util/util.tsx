/* eslint-disable import/no-anonymous-default-export */

export interface Dimension {
	height: number;
	width: number;
}
export interface DimensionXY {
	x: number;
	y: number;
}

const Size = ({width, height}: Dimension) => {
	return {
		width,
		height,
		toXY: (): DimensionXY => ({x: width, y: height}),
	};
};

const getCenter = (radius: number) => {
	return Size({
		width: (window.innerWidth - radius) / 2,
		height: (window.innerHeight - radius) / 2,
	});
};
const getCenterXY = (radius: number) => {
	return getCenter(radius).toXY();
};

export default {
	Size,
	getCenter,
	getCenterXY,
};
