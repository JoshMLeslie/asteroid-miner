import React, { useCallback, useEffect } from 'react';
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
	};
	onHover?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SolarPlanet: React.FC<SolarPlanetProps> = ({planetData, onHover}) => {
	const solarCtx = useSolarContext();
	// const [info, setInfo] = useState<any>(null);
	// const [size] = useState<Size>({width: 26, height: 26});
	// const [angle, setAngle] = useState(0);

	useEffect(() => {
		// new layer.app.Clickable(() => redraw()).start();
		// rotate();
		// setInfo(new layer.app.SolarInfo(layer, {planet: this, zIndex: 1}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const rotate = useCallback(
	// 	(rotationAngle?: number) => {
	// 		if (rotationAngle == null) rotationAngle = Math.random() * 360;
	// 		const newAngle = (angle + rotationAngle) % 360;
	// 		setAngle(newAngle);

	// 		const rotatedCenter = {...center};
	// 		// Assume a rotate function that rotates around the solar center (0,0)
	// 		rotatedCenter.x = (center.x + data.radius) * Math.cos(rotationAngle);
	// 		rotatedCenter.y = (center.y + data.radius) * Math.sin(rotationAngle);

	// 		setCenter(rotatedCenter);
	// 	},
	// 	[angle, center, data]
	// );

	// const checkStatus = useCallback(
	// 	(visible: boolean) => {
	// 		if (info?.isVisible() !== visible) {
	// 			if (visible) {
	// 				info.show();
	// 				layer.dom.element.style.cursor = 'pointer';
	// 			} else {
	// 				info.hide();
	// 				layer.dom.element.style.cursor = 'default';
	// 			}
	// 		}
	// 	},
	// 	[info, layer.dom.element]
	// );

	// const onUpdate = useCallback(
	// 	(time: number) => {
	// 		rotate((time * 360) / 1000 / settings.get('time'));
	// 		redraw();

	// 		if (layer.orbit.isHover()) layer.orbit.redraw();

	// 		checkStatus(isTriggerPoint(mousePoint));
	// 		if (info?.isVisible()) info.updateShape(center);
	// 	},
	// 	[rotate, redraw, checkStatus, layer.orbit, mousePoint, info, center]
	// );

	const Planet = useCallback(() => {
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

		return (
			solarCtx &&
			(planetData?.multiImageOffset && planetData?.multiImageSize ? (
				<Image
					image={image}
					cornerRadius={planetData.radius}
					{...center}
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
					{...center}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			))
		);
	}, [
		solarCtx,
		planetData.imageName,
		planetData.initialCenter,
		planetData.radius,
		planetData?.multiImageOffset,
		planetData?.multiImageSize,
		onHover,
	]);

	return <Planet />;
};

export default SolarPlanet;
