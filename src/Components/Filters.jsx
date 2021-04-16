import {
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import Regulations from "./Regulations"
import MyPins from "./MyPins"
import Markers from "./Markers"
import Favourites from "./Favourites"

export default function Filters(props) {
  console.log("props from FILTERS", props)
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
          <Markers 
           markers={props.markers}
           setMarkers={props.setMarkers}
           modal={props.modal}
           setModal={props.setModal}/>
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