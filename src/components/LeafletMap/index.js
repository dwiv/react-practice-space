import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Wrapper = `
    width: 960px;
    height: 75vh;
`;

export default class Map extends React.Component {
    componentDidMount(){
        this.map = Leaflet.map('map', {
            center: [58, 16],
            zoom: 6,
            zoomControl: false,
        });
    }
}