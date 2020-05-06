import React from 'react';

// import AddressSearch from './components/AddressSearch/AddressSearch';
// import LeafletMap from './components/LeafletMap/LeafletMap';
// import LocationPicker from './components/LocationPicker/LocationPicker';

import { fetchData } from './api';

import {AddressSearch, LeafletMap, LocationPicker} from './components';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './app.css'
import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {


        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        console.log(fetchedData);
    }
    render() {
        const { data } = this.state;
        return (
          <div className={styles.container}>
            <h1>Start of our WiFind App</h1>
            <LeafletMap data={data} />
            <AddressSearch />
            <LocationPicker data={data}/>
          </div>
        );
    }
}

export default App;