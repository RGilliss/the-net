import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";
// import L from 'leaflet';

//  // change pin 
//  const iconUrl = require('../../../images/marker-icon-2x-gold.png').default;

//  const iconFavpins = new L.Icon({
//    iconUrl,
//    iconRetinaUrl: iconUrl,
//    iconAnchor: null,
//    popupAnchor: [-3, -76],
//    shadowUrl: null,
//    shadowSize: null,
//    shadowAnchor: null,
//    iconSize: new L.Point(30, 45),
//    className: 'leaflet-marker-icon'
//  });

export default function Favourites() {
  
  const [{ data, loading, error }] = useAxios(
    "/favourites"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
  //console.log("Favourites returnData", returnData)

  return (
    <>
      {returnData.map((pin) => (

        <Marker
          key={pin.id}
          position={[pin.location.x, pin.location.y]}
          // icon = {iconFavPins}
  
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