import { Marker as LeafletMarker, Popup } from "react-leaflet";
import { useRef } from "react";
import PopupDisplay from "./PopupDisplay";

import axios from "axios";

//Places new markers on the map after a user submits the Marker Form

//Marker function is called in NewMarkers component at bottom of file
function Marker(props) {
    console.log("NEW Marker Props", props);
  const markerRef = useRef();
  console.log("markerRef", markerRef)

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
    console.log("props from NEW MARKER:", props);
    // console.log("props.setModal from NEWWWWWWWWWWWWWW MARKER", props.setModal);
    props.setModal(true);
    props.setEdit(true);
debugger
    // const popup = {

    //   leafletLocation: currentLocation,
    //   uuid: uuid,
    //   title: title,
    //   date: date,
    //   species: species,
    //   rating: rating,
    //   description: description,
    //   image: image,

    // };

    const id = props.uuid;

    // axios
    //   .put("/pins", { data: { pinId: id } })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    markerRef.current.remove();
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
          species={props.species}
          image={props.image}
          rating={props.rating}
          onDelete={handleDelete}
          onEdit={handleEdit}
          leafletLocation={props.leafletLocation}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
        />
      </Popup>
    </LeafletMarker>

  );
}

//This component maps through the array of markers and executes the above function on each marker
export default function NewMarkers(props) {
  return (
    <>
      {props.markers.map((popup) => (
        <Marker
          key={popup.leafletLocation}
          {...popup}
          setModal={props.setModal}
          setEdit={props.setEdit}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
        />
      ))}
    </>
  );
}
