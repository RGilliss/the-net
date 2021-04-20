import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";
import { useContext } from "react";
import UserContext from "../../UserContext";
 

import L from 'leaflet';

 // change pin 
 const iconUrl = require('../../../images/marker-icon-2x-gold.png').default;

 const iconFavPins = new L.Icon({
   iconUrl,
   iconRetinaUrl: iconUrl,
   iconAnchor: null,
   popupAnchor: [-3, -76],
   shadowUrl: null,
   shadowSize: null,
   shadowAnchor: null,
   iconSize: new L.Point(25, 38),
   className: 'leaflet-marker-icon'
 });

export default function Favourites() {

  const user = useContext(UserContext)

  const [{ data, loading, error }] = useAxios({ url: "/favourites",
    params: {user_id: user.id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const returnData = data;


// const [favouritesList, setFavouritesList] = useState([]);

// useEffect(

//   () =>
//     axios
//       .get("/favourites", user.id)
//       .then((res) => {
//         // console.log(res.data);
//         setFavouritesList(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       }),
//   []
// );



  return (
    <>
      {returnData.map((pin) => (

        <Marker
          key={pin.id}
          position={[pin.location.x, pin.location.y]}
          icon = {iconFavPins}
  
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