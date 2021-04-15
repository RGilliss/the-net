import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";


export default function MyPins() {
  
  const [{ data, loading, error }] = useAxios(
    "/mypins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
  console.log("Mypins returnData", returnData)

  return (
    <>
      {returnData.map((myPin) => (

        <Marker
          key={myPin.id}
          position={[myPin.location.x, myPin.location.y]}
  
        >
          <Popup>
            <PopupDisplay
              title={myPin.title}
              description={myPin.description}
              date={myPin.date}
              image={myPin.image}
              rating={myPin.rating}
              location={myPin.location}
              species_name={myPin.species_name}
              user_id={myPin.user_id}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
