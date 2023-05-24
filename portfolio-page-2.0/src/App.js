import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { ThemeProvider } from 'styled-components';
import theme from './assets/themes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			{' '}
			{/* uses contextAPI to provide styles to all components */}
			<div className="App">
				<Navbar />
			</div>
		</ThemeProvider>
	);
}

export default App;
