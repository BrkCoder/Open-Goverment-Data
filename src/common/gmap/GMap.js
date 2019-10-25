import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import './GMap.scss';

export const GMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter}>
    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
      {props.markers}
    </MarkerClusterer>
  </GoogleMap>
));
