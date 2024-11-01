import styled from 'styled-components';

const ModalBackground = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	box-shadow: 0px 0px 1px 1px #8b8b8d;
	background-color: #00000011;
	backdrop-filter: blur(10px);
`;

export default ModalBackground;
