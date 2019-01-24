import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import "./Map.css";

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}>
    </GoogleMap>
));

export default Map;