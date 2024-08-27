import Konva from 'konva';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, Text } from 'react-konva';
import { useSolarContext } from '../../../context/solar.context';
import util, { Dimension, DimensionXY } from '../../../util/util';

export interface SolarPlanetProps {
	planetData: {
		imageName: string;
		radius: number;
		multiImageOffset?: DimensionXY;
		multiImageSize?: Dimension;
		initialCenter?: DimensionXY;
		rotate?: boolean;
	};
	onHover?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SolarPlanet: React.FC<SolarPlanetProps> = ({planetData, onHover}) => {
	const solarCtx = useSolarContext();
	const planetRef = useRef<Konva.Image>(null);
	const [shapeCenter, setShapeCenter] = useState<DimensionXY>({x: 0, y: 0});
	const [shapeTranslatedRotation, setShapeTranslatedRotation] = useState(0);
	// const [info, setInfo] = useState<any>(null);

	useEffect(() => {
		let center = planetData.initialCenter || {x: 0, y: 0};
		const expectedCenter = util.getCenterXY(planetData.radius);
		if (planetData.initialCenter?.x === -1) {
			center.x = expectedCenter.x;
		}
		if (planetData.initialCenter?.y === -1) {
			center.y = expectedCenter.y;
		}
		if (center.x === 0 && center.y === 0) {
			center = expectedCenter;
		}

		setShapeCenter(center);
	}, [planetData.initialCenter, planetData.radius]);

	const center = solarCtx!.orbit.solarCenter.toXY();
	const doRotate = useCallback((): number => {
		const shape = planetRef.current;

		if (!shape) {
			return 0;
		}

		const {x, y, theta} = util.rotateAroundPoint(
			shape.position(),
			center,
			shapeTranslatedRotation
		);

		// move the rotated shape in relation to the rotation point.
		shape.position({x, y});
		setShapeCenter({x, y});

		const newAngle = shape.rotation() + 1;
		shape.rotation(newAngle); // rotate the shape in place
		setShapeTranslatedRotation(newAngle);

		console.log(newAngle);
		return newAngle + 10;
	}, [center, shapeTranslatedRotation]);

	const {startAnimating, stopAnimating} = util.useAnimation(doRotate);

	useEffect(() => {
		startAnimating();
		return () => stopAnimating();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (!solarCtx) {
		return <></>;
	}

	const onMouseEnter = () => {
		if (onHover) {
			onHover(true);
		}
	};
	const onMouseLeave = () => {
		if (onHover) {
			onHover(false);
		}
	};

	const image = solarCtx.getImage(planetData.imageName);
	if (!image) {
		console.error('error loading image:', planetData.imageName);
		return <Text text="img err" />;
	}

	return (
		solarCtx &&
		(planetData?.multiImageOffset && planetData?.multiImageSize ? (
			<Image
				ref={planetRef}
				image={image}
				cornerRadius={planetData.radius}
				{...shapeCenter}
				rotation={shapeTranslatedRotation}
				height={planetData?.multiImageSize?.height}
				width={planetData?.multiImageSize?.width}
				crop={{
					...planetData?.multiImageOffset,
					...planetData?.multiImageSize,
				}}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
		) : (
			<Image
				image={image}
				cornerRadius={planetData.radius}
				{...shapeCenter}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
		))
	);
};

export default SolarPlanet;
