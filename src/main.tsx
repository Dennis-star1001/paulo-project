import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from './theme';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '@fontsource/lato';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import '@fontsource/open-sans';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store';
import { ErrorBoundary } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
