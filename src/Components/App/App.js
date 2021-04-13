import { MapContainer } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import Markers from "../Markers";
import Layers from "../Layers";
import NewMarkers from "../NewMarkers"


export default function App() {
  let startPosition = [49.7303, -125.91];

  return (
    <div>
      <Navbar/>
      <MapContainer center={startPosition} zoom={8}>
        <Layers/>
        <Markers/>
        <NewMarkers/>
      </MapContainer>
    </div>
  );
}
