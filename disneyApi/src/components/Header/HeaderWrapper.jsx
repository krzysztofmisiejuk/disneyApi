import styled from 'styled-components';
import colors from '../../colors/colors';

const HeaderWrapper = styled.div`
	padding: 0 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${colors.greyColor};
	max-width: 1920px;
`;

export default HeaderWrapper;
