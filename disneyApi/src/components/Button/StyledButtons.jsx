import styled from 'styled-components';
import colors from '../../colors/colors';

const StyledButton = styled.button`
	background-color: ${colors.lightBlueColor};
	color: ${(props) => props.$textColotBtn};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${colors.blueColor};
	}
`;

export default StyledButton;
