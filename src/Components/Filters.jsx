import React from "react";
import {
  LayersControl,
  Popup,
  Circle,
  FeatureGroup,
  Rectangle
} from "react-leaflet";
import Regulations from "./Regulations"

export default function Filters() {
 
  return (
    <>
      <LayersControl.Overlay name="Regulations">
        <FeatureGroup >
          <Regulations />
        </FeatureGroup>
      </LayersControl.Overlay>
    </>
  );
}