// @flow
import React, {Component} from "react";
import "./App.scss";
import Map from "./map/Map";

type Props = {};
type State = {};

class App extends Component<Props, State> {
    render() {
        return (
            <div className="App">
                <h1>OpenGovData(OGD)</h1>
                <main className='main'>
                    <Map/>
                </main>
            </div>
        );
    }
}

export default App;
