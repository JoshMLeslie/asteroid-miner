/* eslint-disable import/no-anonymous-default-export */

import { useCallback, useEffect, useRef, useState } from 'react';

const MILISECOND = 1000;

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

const rotateAroundPoint = (
	target: DimensionXY,
	center: DimensionXY,
	theta: number
) => {
	let angleRadians = (theta * Math.PI) / 180; // sin + cos require radians

	const x =
		center.x +
		(target.x - center.x) * Math.cos(angleRadians) -
		(target.y - center.y) * Math.sin(angleRadians);
	const y =
		center.y +
		(target.x - center.x) * Math.sin(angleRadians) +
		(target.y - center.y) * Math.cos(angleRadians);

	return {x, y, theta};
};

function useAnimation<T = any>(
	callback: () => T,
	fps = 60,
	duration = Number.POSITIVE_INFINITY,
	shouldAnimate = true
) {
	const [isAnimating, setIsAnimating] = useState(false);

	const startTimeRef = useRef(0);
	const frameRef = useRef<number>(-1);

	const startAnimating = () => {
		startTimeRef.current = window.performance.now();
		frameRef.current = requestAnimationFrame(animate);
	};

	const stopAnimating = () => {
		if (frameRef.current) {
			cancelAnimationFrame(frameRef.current);
			frameRef.current = -1;
		}
		setIsAnimating(false);
	};

	const animate = useCallback(
		(now: DOMHighResTimeStamp) => {
			callback();

			const timeFraction = (now - startTimeRef.current) / duration;
			if (timeFraction < 1) {
				frameRef.current = requestAnimationFrame(animate);
			}
		},
		[callback, duration]
	);

	useEffect(() => {
		if (shouldAnimate) {
			startAnimating();
		} else if (frameRef.current > 0) {
			stopAnimating();
		}
		return () => stopAnimating();
	}, [animate, isAnimating]);

	return {
		startAnimating,
		stopAnimating,
		isAnimating,
	};
}

export default {
	Size,
	getCenter,
	getCenterXY,
	useAnimation,
	rotateAroundPoint,
};
