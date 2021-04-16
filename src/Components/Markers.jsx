import useAxios from "axios-hooks";
import NewMarkers from "./NewMarkers";

//Recieves Marker data from database
export default function Markers(props) {

  const [{ data, loading, error }] = useAxios("/pins");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const returnData = data.map((marker) => ({
    ...marker,
    leafletLocation: [marker.location.x, marker.location.y],
  }));

  console.log("props from MARKER:", props);
  console.log("props.setModal from MARKER", props.setModal);

  return (
    <NewMarkers
      edit={props.edit}
      setEdit={props.setEdit}
      setMarkers={props.setMarkers}
      modal={props.modal}
      setModal={props.setModal}
      editPopup={props.editPopup}
      setEditPopup={props.setEditPopup}
      markers={props.markers.length === 0 ? returnData : props.markers}
    />
  );
}
