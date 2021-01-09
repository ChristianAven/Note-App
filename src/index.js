import React from 'react';
import ReactDOM from 'react-dom';
import JournalApp from './JournalApp';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
