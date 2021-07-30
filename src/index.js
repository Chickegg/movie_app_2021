import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 같은 directory안에 있는 App이라는 함수를 불러온다.
import Potato from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);
