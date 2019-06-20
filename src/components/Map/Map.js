import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: -26.1212121,
      longitude: -48.7121212,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }
  }

  componentDidMount() {    
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        this.setState({ error: error.message })
      },
      { enableHighAccuracy: false, timeout: 1, maximumAge: 1, distanceFilter: 1 }
    )
  }
  
  render() {
    let initialRegion = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: this.state.latitudeDelta,
      longitudeDelta: this.state.longitudeDelta
    }
    let myCoordinate = { latitude: this.state.latitude, longitude: this.state.longitude }
    let myLocation = { latitude: 0, longitude: 0 }
    return (
        <MapView style={ styles.map }
          initialRegion={ initialRegion }
          region={ initialRegion }>
          <Marker pinColor={ 'green'}
            coordinate={ myCoordinate } />
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});