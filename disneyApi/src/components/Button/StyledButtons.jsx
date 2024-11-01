import styled from 'styled-components';
import colors from '../../colors/colors';

const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: ${(props) => props.$blueColor};
	color: ${(props) => props.$darkColor};
	border: none;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${colors.darkBlueColor};
	}
`;

export default StyledButton;
