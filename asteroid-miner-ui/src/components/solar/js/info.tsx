import React, { useCallback, useState } from 'react';
import { Rect, Text } from 'react-konva';

interface Settings {
	hidden: boolean;
	planet: Planet;
}

interface Planet {
	name: string;
	settings: {
		get: (key: string) => any;
	};
}

interface SolarInfoProps {
	planet: Planet;
}

const SolarInfo: React.FC<SolarInfoProps> = ({planet}) => {
	const [settings, setSettings] = useState<Settings>({hidden: true, planet});
	const [rectPos, setRectPos] = useState({x: 0, y: 0});

	const show = useCallback(() => {
		setSettings((prevSettings) => ({...prevSettings, hidden: false}));
	}, []);

	const hide = useCallback(() => {
		setSettings((prevSettings) => ({...prevSettings, hidden: true}));
	}, []);

	const updateShape = useCallback(() => {
		setRectPos((lastPos) => ({x: lastPos.x + 20, y: lastPos.y + 10}));
	}, []);

	return (
		<div id="solar-info-container">
			<Text fill="#0ff">{planet.settings.get('name')}</Text>
			<Rect height={30} width={100} fill="#002244" {...rectPos} />
		</div>
	);
};

export default SolarInfo;
