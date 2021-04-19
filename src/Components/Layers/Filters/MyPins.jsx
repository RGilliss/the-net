import useAxios from "axios-hooks";
import axios from 'axios';
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./Markers/PopupDisplay";
import UserContext from "../../UserContext";
import L from "leaflet";
import { useContext, useState, useEffect } from "react";
import NewMarkers from "./Markers/NewMarkers";



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
  const [myPins, setMyPins] = useState({});

  const user = useContext(UserContext);

  const [{ data, loading, error }] = useAxios({
    url: "/mypins",
    params: { user_id: user.id }, 
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const pin = data.reduce((acc, val) => {
    return {...acc, [val.uuid]:{...val, leafletLocation: [val.location.x, val.location.y]}};
  }, {});
  setMyPins({...myPins, pin});
  // useEffect(() => {
  //   axios.get('/mypins', { user_id: user.id })
  //     .then((res) => {
  //       console.log(res)
  //       const returnData = res.data.reduce((acc, val) => {
  //         return {...acc, [val.uuid]:{...val, leafletLocation: [val.location.x, val.location.y]}};
  //       }, {});
  //       setMyPins(returnData);
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })

  // }, []);

  console.log("myPins", myPins)

  return (
    <>
    <NewMarkers markers={myPins}/>
    </>
    //   {returnData.map((myPin) => (
    //     <Marker
    //       key={myPin.id}
    //       position={[myPin.location.x, myPin.location.y]}
    //       icon = {iconMypins} 
    //     >
    
    //       <Popup>
    //         <PopupDisplay
    //           title={myPin.title}
    //           description={myPin.description}
    //           date={myPin.date}
    //           image={myPin.image}
    //           rating={myPin.rating}
    //           location={myPin.location}
    //           species_name={myPin.species_name}
    //           user_id={myPin.user_id}
    //         />
    //       </Popup>
    //     </Marker>
    //   ))}
    // </>
  );
}
