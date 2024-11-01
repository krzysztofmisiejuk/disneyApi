import { Header, ThemeWrapper, Cards } from './components/index';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import colors from './colors/colors';

function App() {
	const [theme, setTheme] = useState(true);
	const themeColors = {
		dark: theme ? colors.mainDark : colors.mainLight,
		light: !theme ? colors.mainDark : colors.mainLight,
	};
	return (
		<ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
			<ThemeWrapper
				$darkColor={themeColors.dark}
				$lightColor={themeColors.light}
			>
				<Header />
				<Cards />
			</ThemeWrapper>
		</ThemeContext.Provider>
	);
}

export default App;
