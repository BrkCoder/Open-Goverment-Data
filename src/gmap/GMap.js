// @flow
import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import "./GMap.scss";

type Props = {
    defaultZoom: number,
    defaultCenter: { lat: number, lng: number },
    markers: Marker[]
};
const GMap = withScriptjs(withGoogleMap((props: Props) =>
    <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}>
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}>
            {props.markers}
        </MarkerClusterer>
    </GoogleMap>
));

export default GMap;
