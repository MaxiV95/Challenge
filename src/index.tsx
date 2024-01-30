import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
	const theme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#AE9672',
				contrastText: 'rgba(255,255,255,0.87)',
			},
			secondary: {
				main: '#ffffff',
			},
			background: {
				default: '#fff',
				paper: '#fff',
			},
		},
	});
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</React.StrictMode>,
	);
} else {
	console.error('Root element with id "root" not found.');
}
