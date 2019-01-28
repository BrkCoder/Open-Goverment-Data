// @flow
import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import "./Map.css";
type Props = {
    defaultZoom: number,
    defaultCenter: { lat: number, lng: number},
    markers: Marker[]
};
const Map = withScriptjs(withGoogleMap((props:Props) =>
    <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}>
        {props.markers}
    </GoogleMap>
));

export default Map;