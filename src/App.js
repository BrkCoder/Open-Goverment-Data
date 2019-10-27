import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

import {Home} from './pages/Home';
import {Transportation} from './pages/Transportation';

import {AppMenu} from './compnents/Menu/AppMenu';
import {ToggleStore} from './context/toggle/ToggleStore';

const App = () => (
  <ToggleStore>
    <Router>
      <div className="app">
        <main className='main'>
          <AppMenu/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/transportation" component={Transportation}/>
          </div>
        </main>
      </div>
    </Router>
  </ToggleStore>
);

export default App;
