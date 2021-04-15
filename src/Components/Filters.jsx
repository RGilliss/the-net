import {
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import Regulations from "./Regulations"
import MyPins from "./MyPins"
import AllMarkers from "./AllMarkers"
import Favourites from "./Favourites"

export default function Filters() {

  return (
    <>
      <LayersControl.Overlay name="Regulations">
        <FeatureGroup >
          <Regulations />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="My Pins">
        <FeatureGroup >
          <MyPins />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="All Pins">
        <FeatureGroup >
          <AllMarkers />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="My Favourites">
        <FeatureGroup >
          <Favourites />
        </FeatureGroup>
      </LayersControl.Overlay>
    </>
  );
}