import {
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import Regulations from "./Regulations"


export default function RegulationFilter() {

  return (
    <>
      <LayersControl.Overlay name="Regulations">
        <FeatureGroup>
          <Regulations />
        </FeatureGroup>
      </LayersControl.Overlay>

      </>
  );
}