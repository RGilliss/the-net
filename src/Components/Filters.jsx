import {
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import MyPins from "./MyPins"
import AllMarkers from "./AllMarkers"
import Favourites from "./Favourites"

export default function Filters(props) {

  return (
    <>
      <LayersControl.Overlay name="My Pins" checked={props.selected === "My Pins"}>
        <FeatureGroup>
          <MyPins />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="All Pins" checked={props.selected === "All Pins"}>
        <FeatureGroup>
          <AllMarkers />
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="My Favourites" checked={props.selected === "My Favourites"}>
        <FeatureGroup>
          <Favourites />
        </FeatureGroup>
      </LayersControl.Overlay>
    </>
  );
}