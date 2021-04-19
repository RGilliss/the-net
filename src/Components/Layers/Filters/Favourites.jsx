import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";
import { useContext } from "react";
import UserContext from "../../UserContext";
import NewMarkers from "./Markers/NewMarkers";

import L from "leaflet";
import { LocalPrintshopSharp } from "@material-ui/icons";

// change pin
const iconUrl = require("../../../images/marker-icon-2x-gold.png").default;

const iconFavPins = new L.Icon({
  iconUrl,
  iconRetinaUrl: iconUrl,
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(25, 38),
  className: "leaflet-marker-icon",
});

export default function Favourites(props) {
  const user = useContext(UserContext);

  const [{ data, loading, error }] = useAxios({
    url: "/favourites",
    params: { user_id: user.id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const favourites = data.reduce((acc, val) => {
    return {
      ...acc,
      [val.uuid]: { ...val, leafletLocation: [val.location.x, val.location.y] },
    };
  }, {});
  console.log("FAVOURITES AFTER REDUCER:", favourites);
  console.log("FAV PROPS", props);

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
