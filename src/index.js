import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import App from './App';

render(
  <Router>
    <Routes>
      {/*other routes need to be children of App so app persist as home */}
      <Route path='/' element={<App />}>

      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

