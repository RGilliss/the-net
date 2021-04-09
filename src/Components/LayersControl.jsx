import React from "react";
import MapTiles from "./MapTiles"
import Filters from "./Filters"
import {
  LayersControl,
} from "react-leaflet";

export default function Layers () {
  return (
    <LayersControl position="bottomright">
      <MapTiles/>
      <Filters/>
    </LayersControl>
  )
}