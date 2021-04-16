import { Marker as LeafletMarker, Popup } from "react-leaflet";
import {useRef} from 'react'
import PopupDisplay from "./PopupDisplay";
import axios from 'axios'
import L from 'leaflet';

// const iconPerson = new L.Icon({
//   iconUrl: require('../img/fish.png'),
//   iconRetinaUrl: require('../img/fish.png'),
//   iconAnchor: null,
//   popupAnchor: null,
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: new L.Point(60, 75),
//   className: 'leaflet-marker-icon'
// });
// L.marker([50.505, 30.57], {icon: iconPerson}).addTo(map);




//Places new markers on the map after a user submits the Marker Form
function Marker(props) {
  const markerRef = useRef();
  const handleDelete = function() {
      const id = props.uuid;
      console.log(id)
      console.log()
      axios
        .delete("/pins", { data: { pinId: id } })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

    markerRef.current.remove()
  }
  return (
        <LeafletMarker key={props.leafletLocation} position={props.leafletLocation}  ref={markerRef}>
          <Popup>
            <PopupDisplay
              pin_id={props.id}
              date={props.date}
              title={props.title}
              description={props.description}
              species={props.species}
              image={props.image}
              rating={props.rating}
              onDelete={handleDelete}
            />
          </Popup>
        </LeafletMarker>
  );
}
export default function NewMarkers(props) {

  return (
    <>
      {props.markers.map((popup) => <Marker key={popup.leafletLocation} {...popup}/>)}
    </>
  );
}
