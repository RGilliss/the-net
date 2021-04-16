import { MapContainer } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import Markers from "../Markers";
import Layers from "../Layers";
import { useState } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import GeoSearch from '../GeoSearch'
import MarkerCreation from '../MarkerCreation'


export default function App() {
  let startPosition = [49.7303, -125.91];
  const [markers, setMarkers] = useState([])
  const [modal, setModal] = useState(false);

  console.log("APP markers", markers)
  console.log("APP modal", modal)

  return (
    <div>
      <Navbar/>
      <MapContainer center={startPosition} zoom={8}>
        <GeoSearch provider= {new OpenStreetMapProvider()}/>
        <Layers 
          markers={markers}
          setMarkers={setMarkers}
          modal={modal}
          setModal={setModal}
          />
        {/* <Markers/>      */}
        <MarkerCreation
         markers={markers}
         setMarkers={() => setMarkers()}
         modal={modal}
         setModal={() => setModal()}
        />
      </MapContainer>
    </div>
  );
}
