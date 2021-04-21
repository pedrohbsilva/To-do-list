import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  const notFoundPage = (): JSX.Element => (
    <h1 style={{ color: '#333' }}>Page not found</h1>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={notFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
