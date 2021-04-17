import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";
import { useContext } from "react";
import UserContext from "../../UserContext";
import axios from "axios";
 


// import L from 'leaflet';

// //change pin
// const iconFavPins = new L.Icon({
//   iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJaFQQLvEJ5qi0sKUYTFTcs-ySvZT8dE0Sg&usqp=CAU",
//   iconRetinaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJaFQQLvEJ5qi0sKUYTFTcs-ySvZT8dE0Sg&usqp=CAU",
//   iconAnchor: null,
//   popupAnchor: null,
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: new L.Point(50, 55),
//   className: 'leaflet-marker-icon'
// });

export default function Favourites() {

  const user = useContext(UserContext)

  const [{ data, loading, error }] = useAxios({ url: "/favourites",
    params: {user_id: user.id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const returnData = data;
console.log("user ID", user.id)
  console.log("Favourites returnData", returnData)

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