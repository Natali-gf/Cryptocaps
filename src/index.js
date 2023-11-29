import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './core/theme/ThemeProvider';
import {store} from './core/store/store';
import App from './app/App';
import './index.css';
import {generateData} from './temporaryData/generateData';

const container = document.getElementById('root');
const root = createRoot(container);
// generateData()
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
);
