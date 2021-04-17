import useAxios from "axios-hooks";
import NewMarkers from "./NewMarkers";
import { useEffect } from "react"

//Recieves Marker data from database
export default function Markers(props) {

  // const [{ data, loading, error }] = useAxios("/pins");
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  
  // const returnData = data.reduce((acc, val) => {
  //   return {...acc, [val.uuid]:{...val, leafletLocation: [val.location.x, val.location.y]}};
  // }, {})
    
  //   (marker) => ({
  //   ...marker,
  //   leafletLocation: [marker.location.x, marker.location.y],
  // }));

  // useEffect(() => {
  // });
  // props.setMarkers(returnData)
  
  console.log("props.markers from MARKER $$$$:", props.markers);
  // console.log("returnData from MARKER &&&&&&:", returnData);

  return (
    <NewMarkers
      edit={props.edit}
      setEdit={props.setEdit}
      setMarkers={props.setMarkers}
      modal={props.modal}
      setModal={props.setModal}
      editPopup={props.editPopup}
      setEditPopup={props.setEditPopup}
      markers={props.markers}
    />
  );
}
