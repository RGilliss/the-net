import { Marker as LeafletMarker, Popup } from "react-leaflet";
import { useRef } from "react";
import PopupDisplay from "./PopupDisplay";
import axios from "axios";

//Places new markers on the map after a user submits the Marker Form
function Marker(props) {
  console.log("NEW Marker Props", props);
  const markerRef = useRef();
  const handleDelete = function () {
    const id = props.uuid;
    console.log(id);
    console.log();
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

  const handleEdit = () => {
    console.log("props from NEW MARKER:", props);
    props.setModal(true);

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
    console.log(id);
    console.log();

    axios
      .put("/pins", { data: { pinId: id } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    //markerRef.current.remove();
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
        />
      </Popup>
    </LeafletMarker>
  );
}
export default function NewMarkers(props) {
  return (
    <>
      {props.markers.map((popup) => (
        <Marker key={popup.leafletLocation} {...popup} />
      ))}
    </>
  );
}
