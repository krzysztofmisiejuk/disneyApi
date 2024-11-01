import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledButton } from './';
import colors from '../../colors/colors';

const Button = ({ onClick, children }) => {
	const { themeColors } = useContext(ThemeContext);
	return (
		<StyledButton
			onClick={onClick}
			$darkColor={themeColors.dark}
			$blueColor={colors.blueColor}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
