import React from "react";
import {
  LayersControl,
  Popup,
  Circle,
  FeatureGroup
} from "react-leaflet";
import Regulations from "./Regulations"

export default function Filters() {
  const startPosition = [49.7303, -125.91];
  return (
    <>
      <LayersControl.Overlay name="Regulations">
        <FeatureGroup >
          <Popup>No Fishing - {startPosition}</Popup>
          {/* <Popup><Regulations /></Popup> */}
          <Circle center={startPosition} radius={2000} />
        </FeatureGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay >
        
      </LayersControl.Overlay>
    </>
  );
}