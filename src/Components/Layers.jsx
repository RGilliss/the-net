import Maps from "./Maps"
import Filters from "./Filters"
import {LayersControl} from "react-leaflet";



//Controls the layers of the map interface
export default function Layers(props) {
  console.log("props from LAYERS", props)
  return (
    <LayersControl position="bottomright">
      <Maps/>
      <Filters
        markers={props.markers}
        setMarkers={props.setMarkers}
        modal={props.modal}
        setModal={props.setModal}
       />
    </LayersControl>
  )
}