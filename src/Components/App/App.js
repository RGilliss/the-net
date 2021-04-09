import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";
import Navbar from "../Navbar";
import { MarkunreadSharp } from "@material-ui/icons";
import CreateMarker from "../CreateMarker";
import Layers from "../Layers";

export default function App() {
  let startPosition = [49.7303, -125.91];

  return (
    <div>
      <Navbar />

      <MapContainer center={startPosition} zoom={10}>
        <Layers />
        <CreateMarker />
      </MapContainer>
    </div>
  );
}
