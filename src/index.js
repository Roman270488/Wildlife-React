import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import WrapHeadMain from './components/wrap-header-main-top/Wrap-head-main';
import Main from './components/main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrapHeadMain />
    <Main />
  </React.StrictMode>
);