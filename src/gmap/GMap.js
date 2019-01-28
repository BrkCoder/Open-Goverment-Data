// @flow
import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
type Props = {
    defaultZoom: number,
    defaultCenter: { lat: number, lng: number},
    markers: Marker[]
};
const GMap = withScriptjs(withGoogleMap((props:Props) =>
    <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}>
        {props.markers}
    </GoogleMap>
));

export default GMap;