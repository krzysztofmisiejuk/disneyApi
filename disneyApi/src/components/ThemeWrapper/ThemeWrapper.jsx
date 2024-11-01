import styled from 'styled-components';

const ThemeWrapper = styled.div`
	height: 100%;
	color: ${(props) => props.$lightColor};
	background-color: ${(props) => props.$darkColor};
`;


export default ThemeWrapper;
