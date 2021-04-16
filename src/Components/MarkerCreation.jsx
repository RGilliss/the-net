import NewMarkers from "./NewMarkers";
import ModalContainer from "./ModalContainer";

// Contains the popups state, State is set in MarkerForm.jsx and is displayed in NewMarkers
export default function MarkerCreation(props) {
  return (
    <>
      {/* <NewMarkers 
      markers={markers}
      modal={modal}
      setModal={setModal}
      /> */}
      <ModalContainer
        markers={props.markers}
        setMarkers={props.setMarkers}
        modal={props.modal}
        setModal={props.setModal}
        setEdit={props.setEdit}
        edit={props.edit}
        editPopup={props.editPopup}
        setEditPopup={props.setEditPopup}
      />
    </>
  );
}
