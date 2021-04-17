import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";

import L from 'leaflet';

//change pin 
const iconMypins = new L.Icon({
  iconUrl: "https://lh3.googleusercontent.com/proxy/3ZzE1sE90QhpIvP5f7A4C5fnGOMbQZ5dIVUsYKX1ERAyGAdCOQdelz09lGLn4szkfd7DWlZ4-5tb5lDeixppy0kCTjOdO9DJLR_PvMZ73EjMRjM",
  iconRetinaUrl: "https://lh3.googleusercontent.com/proxy/3ZzE1sE90QhpIvP5f7A4C5fnGOMbQZ5dIVUsYKX1ERAyGAdCOQdelz09lGLn4szkfd7DWlZ4-5tb5lDeixppy0kCTjOdO9DJLR_PvMZ73EjMRjM",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(53, 55),
  className: 'leaflet-marker-icon'
});


export default function MyPins() {
  
  const [{ data, loading, error }] = useAxios(
    "/mypins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
  //console.log("Mypins returnData", returnData)

  return (
    <>
      {returnData.map((myPin) => (

        <Marker
          key={myPin.id}
          position={[myPin.location.x, myPin.location.y]}
          icon = {iconMypins}
  
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
