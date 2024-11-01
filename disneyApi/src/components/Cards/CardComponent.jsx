import { useState} from 'react';
import { createPortal } from 'react-dom';
import { StyledCard } from './';
import { Button, Modal } from '../';


const CardComponent = ({ data }) => {
	const [isModalShown, setIsModalShown] = useState(false);

	const handleButtonClick = () => {
		setIsModalShown(true);
	};

	return (
		<>
			<StyledCard>
				<img
					src={data.imageUrl}
					alt={`${data.name} image`}
					width={200}
					height={150}
				/>
				<p>{data.name}</p>
				<Button onClick={handleButtonClick}>Learn more</Button>
			</StyledCard>
			{isModalShown &&
				createPortal(
					<Modal
						setIsModalShown={setIsModalShown}
						data={data}
					/>,
					document.body
				)}
		</>
	);
};

export default CardComponent;
