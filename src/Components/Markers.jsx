import useAxios from "axios-hooks";
import { Marker, Popup } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";

//Recieves Marker data from database
export default function Markers() {
  const [{ data, loading, error }] = useAxios(
    "/pins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
    
  return (
    <>
      {returnData.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.location.x, marker.location.y]}
        >
          <Popup>
            <PopupDisplay
              date={marker.date}
              name={marker.name}
              title={marker.title}
              description={marker.description}
              species={marker.species}
              image={marker.image}
              rating={marker.rating}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
