import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'App';
import {GlobalStyle} from './styles/global-styles';
import {ErrorBoundary} from './ui/error-boundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </>
);
