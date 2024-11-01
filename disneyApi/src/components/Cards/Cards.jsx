import { CardComponent, CardsWrapper } from './';
import useFetchData from '../../hooks/useFetchData';
import { Pagination } from '../';
import { useState } from 'react';

const BASE_URL = `https://api.disneyapi.dev/character`;

const Cards = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, error, isLoading } = useFetchData(
		`${BASE_URL}?page=${currentPage}&pageSize=50`
	);

	return (
		<>
			<CardsWrapper>
				{error && <p>{error.message}</p>}
				{isLoading ? (
					<p>Trwa pobieranie danych...</p>
				) : data.data?.length > 0 ? (
					data.data.map((data) => (
						<CardComponent
							key={data._id}
							data={data}
						/>
					))
				) : (
					<p>brak danych do wyświetlania</p>
				)}
			</CardsWrapper>
			<Pagination
				setCurrentPage={setCurrentPage}
				totalPages={data.info ? data.info.totalPages : 0}
			/>
		</>
	);
};

export default Cards;
