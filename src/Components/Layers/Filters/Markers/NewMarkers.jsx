import { Marker as LeafletMarker, Popup } from "react-leaflet";
import { useRef } from "react";
import PopupDisplay from "./PopupDisplay";

import axios from "axios";

//Places new markers on the map after a user submits the Marker Form

//Marker function is called in NewMarkers component at bottom of file
function Marker(props) {
  console.log("Marker props:", props.species_name)
  const markerRef = useRef();
  //Delete a pin
  const handleDelete = function () {
    const id = props.uuid;
    axios
      .delete("/pins", { data: { pinId: id } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    markerRef.current.remove();
  };
  //Edit a pin
  const handleEdit = () => {
    //HANDLE EDIT FUNCTION
    // triggers when you click edit, popupData is the currently stored data in that popup
    // we want this information to populate the edit marker form
    const popupData = {
      pin_id: props.id,
      date: props.date,
      title: props.title,
      description: props.description,
      species: props.species_name,
      image: props.image,
      rating: props.rating,
      leafletLocation: props.leafletLocation,
      uuid: props.uuid
    }
    console.log("popupData", popupData)
    props.setModal(true);
    props.setEdit(true);
    props.setEditPopup(popupData)
    console.log("Marker props species,", props.species_name)
    

    
  };
  return (

    <LeafletMarker
      key={props.leafletLocation}
      position={props.leafletLocation}
      ref={markerRef}
    >
      <Popup>
        <PopupDisplay
          pin_id={props.id}
          date={props.date}
          title={props.title}
          description={props.description}
          species={props.species_name}
          image={props.image}
          rating={props.rating}
          uuid={props.uuid}
          onDelete={handleDelete}
          onEdit={handleEdit}
          leafletLocation={props.leafletLocation}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
          setMarkers={props.setMarkers}
          markers={props.markers}
        />
      </Popup>
    </LeafletMarker>

  );
}

//This component maps through the array of markers and executes the above function on each marker
export default function NewMarkers(props) {
  console.log("NewMarkers props", props)
  const pins = Object.values(props.markers);
  console.log("Pins", pins)
  return (
    <>
      {pins.map((popup) => (
        <Marker
          key={popup.uuid}
          {...popup}
          setModal={props.setModal}
          setEdit={props.setEdit}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
          setMarkers={props.setMarkers}
          markers={props.markers}
        />
      ))}
    </>
  );
}
