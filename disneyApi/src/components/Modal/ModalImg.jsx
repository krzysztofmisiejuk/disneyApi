import styled from 'styled-components';

const StyledModalImg = styled.img`
	border-radius: 50%;
	width: 200px;
	height: 200px;
	line-height: 200px;
`;

const ModalImg = ({ src, alt }) => {
	return (
		<StyledModalImg
			src={src}
			alt={`profile image ${alt}`}
		></StyledModalImg>
	);
};

export default ModalImg;
