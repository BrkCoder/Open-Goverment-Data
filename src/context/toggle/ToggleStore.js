import React from 'react';
import {ToggleContext} from './toggleContext';

export const ToggleStore = ({children}) => {
  const [state, setState] = React.useState({sideMenu: false});

  const toggleSideMenu = () => setState({sideMenu: !state.sideMenu});

  return (
    <ToggleContext.Provider value={{sideMenu: state.sideMenu, toggleSideMenu}}>
      {children}
    </ToggleContext.Provider>
  );
};
