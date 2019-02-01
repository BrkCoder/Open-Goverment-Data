// @flow
import React, {Component} from "react";
import "./App.scss";
import Map from "./map/Map";
import Menu from "./menu/Menu";
import Sidemenu from "./sidemenu/Sidemenu";

type Props = {};
type State = {
    sideMenu: boolean;
};

class App extends Component<Props, State> {
    
    constructor(props){
        super(props);
        this.state = {
            sideMenu: false
        };
        this.toggleSideMenu = () => {
            this.setState({ sideMenu: !this.state.sideMenu});
        };
    }

    render() {
        return (
            <div className="App">
                <main className='main'>
                    <Menu toggleSideMenu={this.toggleSideMenu}/>
                    <Sidemenu open={this.state.sideMenu} toggleSideMenu={this.toggleSideMenu}/>
                    <div className="content">
                        <Map/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
