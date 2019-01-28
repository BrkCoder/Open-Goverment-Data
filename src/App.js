// @flow
import React, {Component} from "react";
import {Marker, InfoWindow} from "react-google-maps";
import camera from "./camera.png";
import {FiMapPin, FiNavigation} from 'react-icons/fi';
import "./App.scss";
import Map from "./map/Map";
import APIUtils from "./common/APIUtils";

type Props = {};
type State = {
    openMarkers: any,
    cameras: any[]
};

class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            openMarkers: {},
            cameras: []
        }
    }

    componentDidMount() {
        this.createMarkers();
    }

    createMarkers() {
        (new APIUtils()).getCameras().then(({data}) => {
            if (data && Array.isArray(data.cameras)) {
                this.setState({cameras: data.cameras});
            }
        })
    }

    toggleMarker(key) {
        this.setState({openMarkers: {...this.state.openMarkers, [key]: !this.state.openMarkers[key]}});
    }

    render() {
        const googleMapURL = [
            `https://maps.googleapis.com/maps/api/js?key=`,
            process.env.REACT_APP_GOOGLE_MAP_KEY,
            `&v=3.exp&libraries=geometry,drawing,places`
        ].join('');

        return (
            <div className="App">
                <h1>OpenGovData(OGD)</h1>
                <main className='container'>
                    <Map
                        googleMapURL={googleMapURL}
                        loadingElement={<div style={{height: "100%"}}/>}
                        containerElement={<div style={{height: "100%"}}/>}
                        mapElement={<div style={{height: "100%"}}/>}
                        defaultZoom={9}
                        defaultCenter={{lat: 31.790183, lng: 34.654383}}
                        markers={this.getMarkers(this.state)}
                    />
                </main>
            </div>
        );
    }

    getMarkers(state) {
        const {cameras, openMarkers} = state;
        return cameras.map(({Latitude, Longitude, ...rest}) => {
            const key = Object.values(rest).shift();
            return (
                <Marker position={{lat: Latitude, lng: Longitude}} defaultIcon={camera} key={key}
                        onClick={() => this.toggleMarker(key)}>
                    {openMarkers[key] &&
                    <InfoWindow position={{lat: Latitude, lng: Longitude}}
                                onCloseClick={() => this.toggleMarker(key)}>
                        <div className='tooltip-content'>
                            <div className='images'>
                                <span title='קבע נקודת ציון'><FiMapPin className='icon-bounce'/></span>
                                <span title='נווט'><FiNavigation className='icon-spin'/></span>
                            </div>
                            <div className='description'>
                                {Object.keys(rest).map((key) =>
                                    <p key={key}><span className='key'>{key}</span>:{rest[key]}</p>)}
                            </div>
                        </div>
                    </InfoWindow>
                    }
                </Marker>
            )
        });
    }
}

export default App;
