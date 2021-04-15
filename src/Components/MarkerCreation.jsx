import NewMarkers from "./NewMarkers"
import ModalContainer from "./ModalContainer"
import { useState } from 'react'


// Contains the popups state, State is set in MarkerForm.jsx and is displayed in NewMarkers
export default function MarkerCreation() {
  const [popups, setPopups] = useState([])
  
  return (
    <> 
      <NewMarkers popups={popups}/>
      <ModalContainer 
      popups={popups}
      setPopups={setPopups}
      />
    </>
  );
}
