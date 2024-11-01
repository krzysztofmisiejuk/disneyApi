import MuiPagination from '@mui/material/Pagination';
import styled from 'styled-components';
import colors from '../../colors/colors';

const StyledPagination = styled.div`
	margin: 1rem 0 2rem;
	display: flex;
	justify-content: center;
`;

const Pagination = ({ setCurrentPage, totalPages }) => {
	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};
	return (
		<StyledPagination>
			<MuiPagination
				count={totalPages}
				variant='outlined'
				shape='rounded'
				size='large'
				onChange={handlePageChange}
				sx={{
					'& .MuiPaginationItem-root': {
						color: `${colors.greyColor}`,
						borderColor: `${colors.greyColor}`,
					},
					'& .Mui-selected': {
						outline: 'none',
						borderWidth: '2px',
						fontWeight: 'bold',
						scale: '1.15',
					},
					'& .MuiPaginationItem-root:hover': {
						backgroundColor: `${colors.darkGreyColor}`,
					},
				}}
			/>
		</StyledPagination>
	);
};

export default Pagination;
