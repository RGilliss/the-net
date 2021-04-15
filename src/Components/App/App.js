import { MapContainer } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import Markers from "../Markers";
import Layers from "../Layers";

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import GeoSearch from '../GeoSearch'
import MarkerCreation from '../MarkerCreation'


export default function App() {
  let startPosition = [49.7303, -125.91];

  return (
    <div>
      <Navbar/>
      <MapContainer center={startPosition} zoom={8}>
        <GeoSearch provider= {new OpenStreetMapProvider()}/>
        <Layers/>
        {/* <Markers/>      */}
        <MarkerCreation/>
      </MapContainer>
    </div>
  );
}
