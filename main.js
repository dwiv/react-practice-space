import React, { Component } from 'react';
 
const API = 'https://data.princegeorgescountymd.gov/resource/vkdv-rvfx.json';
const DEFAULT_QUERY = 'redux';
 
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
 
}
 
export default App;

