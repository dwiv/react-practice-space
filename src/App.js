import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


import { fetchData } from "./api";

import { AddressSearch, LeafletMap, LocationPicker,NavigationBar } from "./components";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./app.css";
import styles from "./App.module.css";

import { BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  state = { showSideNav: false, data: {} };

  handleSideNavToggle = () => {
    this.setState((currentState) => {
      return { showSideNav: !currentState.showSideNav };
    });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }
  render() {
    const { data } = this.state;
    return (

      <div>
      <NavigationBar>
    
      </NavigationBar>
      
      <div class="stuff">
      <h1>Wi-Find App</h1>
          <LeafletMap data={data} />
          <AddressSearch />
          <LocationPicker data={data} />
      </div> 
      </div>
    );
  }
}

export default App;
