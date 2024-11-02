import { useContext } from 'react';
import MuiSwitch from './MuiSwitch';
import { ThemeContext } from '../../context/ThemeContext';

const SwitchTheme = () => {
	const { setIsDarkTheme } = useContext(ThemeContext);
	return (
		<MuiSwitch
			onChange={() => {
				setIsDarkTheme((prev) => !prev);
			}}
		/>
	);
};

export default SwitchTheme;
