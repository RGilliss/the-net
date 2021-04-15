import {
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import Regulations from "./Regulations"
import MyPins from "./MyPins"
import AllMarkers from "./AllMarkers"

export default function Filters() {

  return (
    <>
      <LayersControl.Overlay name="Regulations">
        <FeatureGroup >
          <Regulations />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="MyPins">
        <FeatureGroup >
          <MyPins />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="AllPins">
        <FeatureGroup >
          <AllMarkers />
        </FeatureGroup>
      </LayersControl.Overlay>
    </>
  );
}