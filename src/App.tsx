import React from 'react';
import { Router } from 'react-router-dom';

import { history } from './services/history';
import { Routes } from './routes';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
