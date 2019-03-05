import React from "react";
import {ToggleContext} from "../App";
import Menu from "./Menu";
import SideMenu from "../SideMenu/SideMenu";

export const AppMenu = () => (
    <ToggleContext.Consumer>
        {({sideMenu, toggleSideMenu}) => (
            <React.Fragment>
                <Menu toggleSideMenu={toggleSideMenu}/>
                <SideMenu open={sideMenu} toggleSideMenu={toggleSideMenu}/>
            </React.Fragment>
        )}
    </ToggleContext.Consumer>
);
