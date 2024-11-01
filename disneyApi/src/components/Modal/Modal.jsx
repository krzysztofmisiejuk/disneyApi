import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import {
	ModalImg,
	ModalList,
	ModalLists,
	ModalContent,
	ModalBackground,
} from './';
import { Button } from '../';
import useEscKey from '../../hooks/useEscKey';

const Modal = ({ setIsModalShown, data }) => {
	const { themeColors } = useContext(ThemeContext);

	const dataEntries = Object.entries(data);
	const filteredDataEntries = dataEntries
		.filter(
			(item) =>
				item[0] === 'films' ||
				item[0] === 'shortFilms' ||
				item[0] === 'videoGames' ||
				item[0] === 'tvShows'
		)
		.filter((item) => item[1].length);

	const closeModalByBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			setIsModalShown(false);
		}
	};

	useEscKey(setIsModalShown);

	return (
		<ModalBackground onClick={closeModalByBackgroundClick}>
			<ModalContent
				$darkColor={themeColors.background}
				$lightColor={themeColors.textColor}
			>
				<>
					<ModalImg
						src={data.imageUrl}
						alt={data.name}
					></ModalImg>
					{filteredDataEntries.length < 1 ? (
						<p>Character did not perform in any films, games and shows.</p>
					) : (
						<ModalLists>
							{data.films.length > 0 && (
								<ModalList
									data={data.films}
									showName='Films'
								/>
							)}
							{data.shortFilms.length > 0 && (
								<ModalList
									data={data.shortFilms}
									showName='Short films'
								/>
							)}
							{data.videoGames.length > 0 && (
								<ModalList
									data={data.videoGames}
									showName='Video games'
								/>
							)}
							{data.tvShows.length > 0 && (
								<ModalList
									data={data.tvShows}
									showName='TV Shows'
								/>
							)}
						</ModalLists>
					)}
				</>
				<Button
					onClick={() => {
						setIsModalShown(false);
					}}
				>
					Close
				</Button>
			</ModalContent>
		</ModalBackground>
	);
};

export default Modal;
