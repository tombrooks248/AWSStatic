
import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import './App.css';

class App extends Component {

  render(){
    return (
         
          <MapContainer id="mapid" 
            center={[0,0.5]} 
            zoom={1} 
            scrollWheelZoom={false} 
            minZoom={1}
            maxZoom={2}
              >
            <TileLayer attribution = "This map is offline"
              url="/KelmarshPhoto.png"
              tileSize={800}
              noWrap = {true}
              />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
    );
  }
}

export default App;
