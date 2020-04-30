import React from 'react';

// import AddressSearch from './components/AddressSearch/AddressSearch';
// import LeafletMap from './components/LeafletMap/LeafletMap';
// import LocationPicker from './components/LocationPicker/LocationPicker';

import { fetchData } from './api';

import {AddressSearch, LeafletMap, LocationPicker} from './components';
import styles from './App.module.css';

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            <div className = {styles.container}>
                <h1>Start of our WiFind App</h1>
                <LeafletMap /> 
                <AddressSearch />
                <LocationPicker />

            </div>
        )
    }
}

export default App;