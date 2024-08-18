import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {App} from './App';

import './assets/style.css';

// ここから下はいじらないけど上はいじるかも、CSSとか
const domRoot = document.getElementById('root');
if (domRoot != null) {
  const root = ReactDOMClient.createRoot(domRoot);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
