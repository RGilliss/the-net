import { useState } from "react";
import MarkerForm from "./MarkerForm";
import EditMarkerForm from "./EditMarkerForm";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { useMapEvent } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//The Modal Component that contains the form when a user double clicks to create a new marker
export default function ModalContainer(props) {
  const classes = useStyles();

  const [markerLocations, setMarkerLocation] = useState([]);
  const map = useMapEvent("click", (e) => {
    const location = e.latlng;
    setMarkerLocation([...markerLocations, location]);
    props.setModal(true);
  });


  console.log("props in MODAL CONTAINER:", props)
  const whichForm = function (edit) {
    if (edit) {
      return (
        <EditMarkerForm
          onClose={() => props.setModal(false)}
          location={markerLocations}
          setMarkers={props.setMarkers}
          setEdit={props.setEdit}
          edit={edit}
          markers={props.markers}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
        />
      );
    } else {
      return (
        <MarkerForm
          onClose={() => props.setModal(false)}
          location={markerLocations}
          setMarkers={props.setMarkers}
          markers={props.markers}
        />
      );
    }
  };

  return (
    <>
      <Modal
        open={props.modal}
        className={classes.modal}
        onClose={() => props.setModal(false)}
      >
        <Fade in={props.modal}>
          <div className={classes.paper}>{whichForm(props.edit)}</div>
        </Fade>
      </Modal>
    </>
  );
}
