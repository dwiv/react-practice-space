import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// import NavBar from "react-responsive-menubar/lib/NavBar";
// import AddressSearch from './components/AddressSearch/AddressSearch';
// import LeafletMap from './components/LeafletMap/LeafletMap';
// import LocationPicker from './components/LocationPicker/LocationPicker';

import { fetchData } from "./api";

import { AddressSearch, LeafletMap, LocationPicker } from "./components";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./app.css";
import styles from "./App.module.css";

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
      <div className={styles.container}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">WiFind</Typography>
            <Button color="inherit">Button 1</Button>
            <Button color="inherit">Button 2</Button>
            <Button color="inherit">Button 3</Button>

          </Toolbar>
        </AppBar>
        <h1>WiFind App</h1>
        <LeafletMap data={data} />
        <AddressSearch />
        <LocationPicker data={data} />
      </div>
    );
  }
}

export default App;
