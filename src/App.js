// @flow
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.scss";
import Home from "./home/Home";
import Transportation from "./transportation/Transportation";
import {AppMenu} from "./menu/AppMenu";

type Props = {};
type State = {
    sideMenu: boolean;
};

export const ToggleContext = React.createContext();

export class ToggleStore extends React.Component {
    state = {sideMenu: false};
    toggleSideMenu = () => this.setState(state => ({sideMenu: !state.sideMenu}));

    render() {
        return (
            <ToggleContext.Provider value={{sideMenu: this.state.sideMenu, toggleSideMenu: this.toggleSideMenu}}>
                {this.props.children}
            </ToggleContext.Provider>
        );
    }
}

class App extends Component<Props, State> {
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
