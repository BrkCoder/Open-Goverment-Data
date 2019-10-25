import React from 'react';
import {ToggleContext} from '../App';
import Menu from './Menu';
import SideMenu from '../SideMenu/SideMenu';

export const AppMenu = () => {
  const {sideMenu, toggleSideMenu} = React.useContext(ToggleContext);
  return (
    <>
      <Menu toggleSideMenu={toggleSideMenu}/>
      <SideMenu open={sideMenu} toggleSideMenu={toggleSideMenu}/>
    </>
  )
};
