import React from "react";
import {
  TileLayer,
  LayersControl
} from "react-leaflet";

export default function Layers () {
  return (
    <LayersControl position="bottomright">
    <LayersControl.BaseLayer checked name="Satelite">
      <TileLayer
        url="https://api.mapbox.com/styles/v1/rgilliss/ckn9nn6nm06sj17o6el953fga/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmdpbGxpc3MiLCJhIjoiY2tuOW5qemR0MGt5azJvcGk1NWo3Z2lmOCJ9.PDRYDZaJE20-RPW9WAWSDw"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Street Map">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Hiking/Biking Trails">
      <TileLayer
        url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Topographical">
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
      />
    </LayersControl.BaseLayer>
    </LayersControl>

  )
}