import React from 'react';
import Menu from './Menu';
import SideMenu from './SideMenu';
import {ToggleContext} from '../../context/toggle/toggleContext';

export const AppMenu = () => {
  const {sideMenu, toggleSideMenu} = React.useContext(ToggleContext);
  return (
    <>
      <Menu toggleSideMenu={toggleSideMenu}/>
      <SideMenu open={sideMenu} toggleSideMenu={toggleSideMenu}/>
    </>
  )
};
