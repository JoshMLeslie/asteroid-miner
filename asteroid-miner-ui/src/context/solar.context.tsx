import { createContext, ReactNode, useContext, useState } from 'react';
import util from '../util/util';

interface SolarProps {
	solarCenter: ReturnType<typeof util.Size>;
}

interface SolarContextData {
	resources: any;
	getImage: (key: string) => HTMLImageElement;
	orbit: SolarProps;
	setOrbit: React.Dispatch<React.SetStateAction<SolarProps>>;
}

const getImage = (key: string) => {
	const imgSrc = require('/src/img/' + key + '.png');
	const img = document.createElement('img');
	img.src = imgSrc;
	return img;
};

const SolarContext = createContext<SolarContextData | null>(null);
export const useSolarContext = () => useContext(SolarContext);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}: {children: ReactNode}) => {
	const [orbit, setOrbit] = useState<SolarProps>({
		solarCenter: util.Size({height: 0, width: 0}),
	});

	return (
		<SolarContext.Provider
			value={{
				resources: null,
				getImage,
				orbit,
				setOrbit,
			}}
		>
			{children}
		</SolarContext.Provider>
	);
};
