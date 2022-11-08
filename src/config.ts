declare global {
  interface Window {
    REACT_APP_API_ADDRESS: string;
    REACT_APP_API_AUTH_ADDRESS: string;
    REACT_APP_SESSION_TIMEOUT: number;
  }
}

export const REACT_APP_API_AUTH_ADDRESS =
  window.REACT_APP_API_AUTH_ADDRESS ?? 'https://auth.test.magnit.exite.ru';

export const REACT_APP_API_ADDRESS =
  // window.REACT_APP_API_ADDRESS ?? 'http://188.243.53.31:18080';
  window.REACT_APP_API_ADDRESS ?? 'https://wg.test.magnit.exite.ru';

export const REACT_APP_SESSION_TIMEOUT =
  localStorage.getItem('test_session_limit') ??
  window.REACT_APP_SESSION_TIMEOUT ??
  4 * 60 * 60 * 1000;
