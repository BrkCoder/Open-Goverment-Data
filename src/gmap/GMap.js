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

// const styles = [
//     {
//         textColor: 'black',
//         height: 53,
//         url: m1,
//         width: 53
//     },
//     {
//         textColor: 'black',
//         height: 56,
//         url: m1,
//         width: 56
//     },
//     {
//         textColor: 'black',
//         height: 66,
//         url: m1,
//         width: 66
//     },
//     {
//         textColor: 'black',
//         height: 78,
//         url: m1,
//         width: 78
//     },
//     {
//         textColor: 'black',
//         height: 90,
//         url: m1,
//         width: 90
//     }];

export default GMap;