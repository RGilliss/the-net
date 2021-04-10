import React from "react";
import { MapContainer } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import CreateMarker from "../CreateMarker";
import Layers from "../LayersControl";


export default function App() {
  let startPosition = [49.7303, -125.91];

  return (
    <div>
      <Navbar />
      <MapContainer center={startPosition} zoom={8}>
        <Layers />
        <CreateMarker />
      </MapContainer>
    </div>
  );
}
