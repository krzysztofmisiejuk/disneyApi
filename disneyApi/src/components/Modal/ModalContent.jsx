import styled from 'styled-components';
import colors from '../../colors/colors';

const ModalContent = styled.div`
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	height: min(600px, 100vh);
	max-height: 100%;
	width: min(600px, 95%);
	color: ${(props) => props.$lightColor};
	background-color: ${(props) => props.$darkColor};
	border-radius: 0.5rem;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 12px;
		height: 12px;
	}

	&::-webkit-scrollbar-track {
		background: ${(props) => props.$darkColor};
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.darkGreyColor};
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: ${colors.greyColor};
	}

	@media (min-height: 800px) {
		overflow-y: auto;
	}
`;

export default ModalContent;
