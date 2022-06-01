import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createRoot} from 'react-dom/client';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

//ReactDOM.render(<App />, document.getElementById('root'));
root.render(
    <App />
);
