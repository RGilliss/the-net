import NewMarkers from "./Markers/NewMarkers";
import L from "leaflet";

// change pin
const iconUrl = require("../../../images/marker-icon-2x-gold.png").default;


 const iconFavPins = new L.Icon({
   iconUrl,
   iconRetinaUrl: iconUrl,
   iconAnchor: [12, 41],
   popupAnchor: [0, -41],
   shadowUrl: null,
   shadowSize: null,
   shadowAnchor: null,
   iconSize: new L.Point(25, 41),
   className: 'leaflet-marker-icon'
 });


export default function Favourites(props) {
  let favourites = props.markers
  if (Object.keys(favourites).length > 0) {
    const pins = Object.values(props.markers);
    favourites = pins.filter((pin) => pin.favourite === true);
  }

  return (
    <>
      <NewMarkers
        markers={favourites}
        icon={iconFavPins}
        title={props.title}
        description={props.description}
        date={props.date}
        image={props.image}
        rating={props.rating}
        location={props.location}
        species_name={props.species_name}
        user_id={props.user_id}
        edit={props.edit}
        setEdit={props.setEdit}
        modal={props.modal}
        setModal={props.setModal}
        editPopup={props.editPopup}
        setEditPopup={props.setEditPopup}
      />
    </>
  );
}
