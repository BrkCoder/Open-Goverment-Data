// @flow
import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import "./Map.css";
type Props = {
    defaultZoom: number,
    defaultCenter: { lat: number, lng: number}
};
const Map = withScriptjs(withGoogleMap((props:Props) =>
    <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}>
    </GoogleMap>
));

export default Map;