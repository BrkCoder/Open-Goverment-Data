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
            if (data) {
                const {cameras} = data;
                if (Array.isArray(cameras) && cameras.length) {
                    this.setState({cameras});
                }
            }
        })
    }

    toggleMarker(key) {
        this.setState({openMarkers: {...this.state.openMarkers, [key]: !this.state.openMarkers[key]}});
    }

    render() {
        const {cameras, openMarkers} = this.state;

        const markers = cameras.map(({Latitude, Longitude, ...rest}) => {
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
                            <div className='description'> {Object.keys(rest).map((key) =>
                                <p key={key}><span className='key'> {key} </span> : {rest[key]}</p>)}
                            </div>
                        </div>
                    </InfoWindow>
                    }
                </Marker>
            )
        });

        return (
            <div className="App">
                <h1>OpenGovData(OGD)</h1>
                <main className='container'>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFr7z43sRFL8lGihjdtc2cDLE-eR3PzY0&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: "100%"}}/>}
                        containerElement={<div style={{height: "100%"}}/>}
                        mapElement={<div style={{height: "100%"}}/>}
                        defaultZoom={9}
                        defaultCenter={{lat: 31.790183, lng: 34.654383}}
                        markers={markers}
                    />
                </main>
            </div>
        );
    }
}

export default App;
