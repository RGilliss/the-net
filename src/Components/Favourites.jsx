import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";



export default function Favourites() {
  
  const [{ data, loading, error }] = useAxios(
    "/favourites"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
  console.log("Favourites returnData", returnData)

  return (
    <>
      {returnData.map((pin) => (

        <Marker
          key={pin.id}
          position={[pin.location.x, pin.location.y]}
  
        >
          <Popup>
            <PopupDisplay
              title={pin.title}
              description={pin.description}
              date={pin.date}
              image={pin.image}
              rating={pin.rating}
              location={pin.location}
              species_name={pin.species_name}
              user_id={pin.user_id}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}