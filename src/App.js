// @flow
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Menu from "./menu/Menu";
import SideMenu from "./sidemenu/Sidemenu";
import Home from "./home/Home";
import Transportation from "./transportation/Transportation";

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
            <Router>
                <div className="App">
                    <main className='main'>
                        <Menu toggleSideMenu={this.toggleSideMenu}/>
                        <SideMenu open={this.state.sideMenu} toggleSideMenu={this.toggleSideMenu}/>
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/transportation" component={Transportation} />
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
