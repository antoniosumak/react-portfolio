import React from 'react';
import { Route } from 'react-router';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
      </Main>
    </>
  );
}

export default App;
