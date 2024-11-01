import { useEffect, useState } from 'react';

const useFetchData = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Wystąpił błąd, dane nie mogą zostać pobrane!');
				}
				const data = await response.json();
				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();

		return () => {
			setIsLoading(false);
		};
	}, [url]);

	return { data, error, isLoading };
};

export default useFetchData;
