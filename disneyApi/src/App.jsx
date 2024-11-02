import { Header, ThemeWrapper, Cards, MainContentWrapper } from './components/';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeContextProvider>
			<ThemeWrapper>
				<MainContentWrapper>
					<Header />
					<Cards />
				</MainContentWrapper>
			</ThemeWrapper>
		</ThemeContextProvider>
	);
}

export default App;
