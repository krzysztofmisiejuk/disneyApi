import { useEffect } from 'react';
const useEscKey = (setState) => {
	useEffect(() => {
		const closeModalByEsc = (e) => {
			if (e.key === 'Escape') {
				setState(false);
			}
		};
		document.addEventListener('keydown', closeModalByEsc);

		return () => {
			document.removeEventListener('keydown', closeModalByEsc);
		};
	}, [setState]);
};

export default useEscKey;
