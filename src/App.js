import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import {Home} from './home/Home';
import {Transportation} from './transportation/Transportation';
import {AppMenu} from './menu/AppMenu';

export const ToggleContext = React.createContext();

export const ToggleStore = ({children}) => {
  const [state, setState] = React.useState({sideMenu: false});

  return (
    <ToggleContext.Provider
      value={{sideMenu: state.sideMenu, toggleSideMenu: () => setState({sideMenu: !state.sideMenu})}}>
      {children}
    </ToggleContext.Provider>
  );
};


class App extends Component {
  render() {
    return (
      <ToggleStore>
        <Router>
          <div className="App">
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
  }
}

export default App;
