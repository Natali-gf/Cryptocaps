import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './core/theme/ThemeProvider';
import { store } from './core/store/store';
import App from './app/App';
import './index.css';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { generateData } from './temporaryData/generateData';
// import { setupStore } from './core/store/store';

// const store = setupStore()
const container = document.getElementById('root');
const root = createRoot(container);
generateData()
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
      {/* <MetaMaskProvider debug={false} sdkOptions={{
        checkInstallationImmediately: false,
        // extensionOnly: true,
        dappMetadata: {
          name: "Cryptocaps",
          url: window.location.host,
        }
      }}> */}
          <App />
        {/* </MetaMaskProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);