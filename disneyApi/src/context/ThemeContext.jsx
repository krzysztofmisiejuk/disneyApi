import { createContext, useState } from 'react';
import colors from '../colors/colors';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const themeColors = {
		background: isDarkTheme ? colors.mainDark : colors.mainLight,
		textColor: isDarkTheme ? colors.mainLight : colors.mainDark,
	};

	return (
		<ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, themeColors }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeContextProvider };
