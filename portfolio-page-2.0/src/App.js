import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { ThemeProvider } from 'styled-components';
import theme from './assets/themes';
import LandingPage from './components/LandingPage/LandingPage.js';
import EmailForm from './components/EmailForm/EmailForm';

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* uses contextAPI to provide styles to all components */}
			<div className="App">
				<Navbar />
				<LandingPage />
				<br />
				<EmailForm />
				<br />
			</div>
		</ThemeProvider>
	);
}

export default App;
