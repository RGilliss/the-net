
import NewMarkers from "./NewMarkers";


//Recieves Marker data from database
export default function Markers(props) {

  console.log("props.markers from MARKER $$$$:", props.markers);

  return (
    <NewMarkers
      edit={props.edit}
      setEdit={props.setEdit}
      setMarkers={props.setMarkers}
      modal={props.modal}
      setModal={props.setModal}
      editPopup={props.editPopup}
      setEditPopup={props.setEditPopup}
      markers={props.markers}
    />
  );
}
