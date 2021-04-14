import Maps from "./Maps"
import Filters from "./Filters"
import {LayersControl} from "react-leaflet";



//Controls the layers of the map interface
export default function Layers() {
  return (
    <LayersControl position="bottomright">
      <Maps/>
      <Filters/>
    </LayersControl>
  )
}