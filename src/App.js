import React, {Component} from "react";
import "./App.scss";
import Map from "./map/Map";

class App extends Component {
    render() {
        return (
            <div className="App">
                <main className='Map-container'>
                    <div><h1>Ronen Rubinov</h1></div>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: "100%"}}/>}
                        containerElement={<div style={{height: "100%"}}/>}
                        mapElement={<div style={{height: "100%"}}/>}
                        defaultZoom={15}
                        defaultCenter={{lat: -34.397, lng: 150.644}}
                    />
                </main>


            </div>


        );
    }
}

export default App;
