import React, { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import MarkerForm from "./MarkerForm";
import PopupDisplay from "./PopupDisplay";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

//Places new markers on the map and displays a Modal with a form
export default function NewMarkers() {
  const classes = useStyles();
  const [markers, setMarkers] = useState([])
  const [modalStyle] = React.useState(getModalStyle);
  const [modal, setModal] = useState(false);
  const map = useMapEvents({
    dblclick(e) {
      const newMarker = e.latlng;
      setModal(true);
      setMarkers([...markers, newMarker])
    }
  })
  
  return (
    <>
    {markers.map(marker => 
      <Marker key={marker} position={marker}>
        <Popup><PopupDisplay/></Popup>
        <Modal
            open={modal}
            className={classes.modal}
            onClose={() => setModal(false)}
          >
            <Fade in={modal}>
              <div className={classes.paper}>
                <MarkerForm marker={marker} onClose={() => setModal(false)} />
              </div>
            </Fade>
          </Modal>
      </Marker>
    )}
    </>
  )
}