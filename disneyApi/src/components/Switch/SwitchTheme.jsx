import { useContext } from 'react';
import MuiSwitch from './MuiSwitch';
import { ThemeContext } from '../../context/ThemeContext';

const SwitchTheme = () => {
	const { setTheme } = useContext(ThemeContext);
	return (
		<MuiSwitch
			onChange={() => {
				setTheme((prev) => !prev);
			}}
		/>
	);
};

export default SwitchTheme;
