import styled from 'styled-components';
import colors from '../../colors/colors';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0.5rem 1rem;
	width: 200px;
	height: 300px;
	color: ${colors.lightGreyColor};
	border: 1px solid ${colors.lightGreyColor};
	border-radius: 0.5rem;
	box-shadow: 0px 0px 1px 1px ${colors.lightGreyColor};
`;

export default StyledCard;
