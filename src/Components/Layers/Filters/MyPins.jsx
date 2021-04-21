import useAxios from "axios-hooks";

import UserContext from "../../UserContext";
import L from "leaflet";
import { useContext } from "react";
import NewMarkers from "./Markers/NewMarkers";


  // MyPins Marker Color
  const iconUrl = require('../../../images/marker-icon-2x-red.png').default;

  const iconMyPins = new L.Icon({
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




export default function MyPins(props) {
  const user = useContext(UserContext);
  console.log("props markers in my pins", props.markers) 
  
  let myPins = props.markers;
  // const [{ data, loading, error }] = useAxios({
  //   url: "/mypins",
  //   params: { user_id: user.id },
  // });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  if (Object.keys(myPins).length > 0) {
     const pins = Object.values(props.markers);
    myPins = pins.filter((pin) => pin.user_id === user.id)
  }

  // const pins = data.reduce((acc, val) => {
  //   return {
  //     ...acc,
  //     [val.uuid]: { ...val, leafletLocation: [val.location.x, val.location.y]},
  //   };
  // }, {});


  return (
    <>
    <NewMarkers 
    icon={iconMyPins}
    edit={props.edit}
    setEdit={props.setEdit}
    modal={props.modal}
    setModal={props.setModal}
    editPopup={props.editPopup}
    setEditPopup={props.setEditPopup}
    markers={myPins}
    selected={props.selected}
    setSelected={props.setSelected}
    style={{
      backgroundColor: "white",
      border: "none"
    }}/>

    </>
  );
}
