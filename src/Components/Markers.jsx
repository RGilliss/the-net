import useAxios from "axios-hooks";
import NewMarkers from "./NewMarkers";


//Recieves Marker data from database
export default function Markers() {

  const [{ data, loading, error }] = useAxios(
    "/pins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data.map((marker) => ({...marker, leafletLocation: [marker.location.x, marker.location.y]}));
    
  return (

    <NewMarkers markers={returnData}/>

  );
}
