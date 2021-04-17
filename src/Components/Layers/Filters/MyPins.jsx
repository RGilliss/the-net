import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";

import L from 'leaflet';


  // change pin 
  const iconUrl = require('../../../images/marker-icon-2x-red.png').default;

  const iconMypins = new L.Icon({
    iconUrl,
    iconRetinaUrl: iconUrl,
    iconAnchor: null,
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 45),
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
