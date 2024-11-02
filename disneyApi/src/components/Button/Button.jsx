import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledButton } from './';

const Button = ({ onClick, children }) => {
	const { themeColors } = useContext(ThemeContext);
	return (
		<StyledButton
			onClick={onClick}
			$textColotBtn={themeColors.background}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
