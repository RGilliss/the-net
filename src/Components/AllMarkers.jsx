import useAxios from "axios-hooks";
import { Popup, Marker } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";
import {useState} from 'react';


export default function AllPins() {
  //make API call to pin for that user
  //it should retourn a json with infos about what pin this user has
  //drop pins on map by paring that info

  // const [userPins, setUserPins] = useState([1,2]);

  const [{ data, loading, error }] = useAxios(
    "/pins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data;
  console.log("Allpins returnData", returnData)

  // const filterPins = ()=> {
  //   return data.filter(pin => { 
  //     return userPins.includes(pin.id)
  //   })
    
  // }
  // console.log(filterPins())


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