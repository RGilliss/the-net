import useAxios from "axios-hooks";
import NewMarkers from "./NewMarkers";


//Recieves Marker data from database
export default function Markers(props) {

  const test = "test";
  const [{ data, loading, error }] = useAxios(
    "/pins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data.map((marker) => ({...marker, leafletLocation: [marker.location.x, marker.location.y]}));
    console.log("props from MARKER:", props)
  return (

    <NewMarkers 
    setMarkers={props.setMarkers}
    modal={props.modal}
    setModal={props.setModal}
    markers={props.markers.length === 0 ? returnData : props.markers}
    />

  );
}
