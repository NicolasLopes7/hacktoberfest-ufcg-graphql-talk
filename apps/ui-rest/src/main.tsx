import { globalStyles } from 'design-system';
import ReactDOM from 'react-dom/client';
import App from './App';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
