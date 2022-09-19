import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <React.StrictMode>
    <App />
  </React.StrictMode>
);