import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import {useMapEvents, Marker, Popup} from "react-leaflet"
import MarkerForm from "./MarkerForm"
import PopupDisplay from "./PopupDisplay"
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function CreateMarker() {

  
  const [markers, setMarkers] = useState([])

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [modal, setModal] = useState(false);
  const map = useMapEvents({
    dblclick(e) {
      const newMarker = e.latlng
      setModal(true);
      setMarkers([...markers, newMarker])
    }
  })
 
  
 
  return (
    <>
    {/* needs a unique id */}
    {markers.map(marker => 
    <Marker position={marker}>
      <Popup><PopupDisplay/></Popup>
      <Modal
        open={modal}
        className={classes.modal}
        onClose={() => setModal(false)}
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <MarkerForm marker={marker} onClose={() => setModal(false)}/>
          </div>
        </Fade>
      </Modal>
    </Marker>
      )}
    </>
  )
}