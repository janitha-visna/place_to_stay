import { createRoot } from 'react-dom';
import App from './App';
import ContextProvider from './Context/ContextProvider';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
