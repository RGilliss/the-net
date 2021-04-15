import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";
import {useState} from 'react';


export default function MyPins() {
  //make API call to pin for that user
  //it should retourn a json with infos about what pin this user has
  //drop pins on map by paring that info

  // const [userPins, setUserPins] = useState([1,2]);

  const [{ data, loading, error }] = useAxios(
    "/mypins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
  console.log("Mypins returnData", returnData)

  // const filterPins = ()=> {
  //   return data.filter(pin => { 
  //     return userPins.includes(pin.id)
  //   })
    
  // }
  // console.log(filterPins())


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
