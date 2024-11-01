import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeWrapper = ({ children }) => {
	const { themeColors } = useContext(ThemeContext);
	return (
		<StyledThemeWrapper
			$textColor={themeColors.textColor}
			$background={themeColors.background}
		>
			{children}
		</StyledThemeWrapper>
	);
};
const StyledThemeWrapper = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(props) => props.$textColor};
	background-color: ${(props) => props.$background};
`;

export default ThemeWrapper;
