import { MapContainer } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import Layers from "../Layers/Layers";
import { useState, useEffect } from "react";
import { OpenStreetMapProvider, JsonProvider } from "leaflet-geosearch";
import GeoSearch from "../GeoSearch";
import ModalContainer from "../Modal/ModalContainer";
import axios from "axios";
import UserContext from '../UserContext'
import SpeciesSearch from "../SpeciesSearch";

// const provider = new OpenStreetMapProvider({
//   searchUrl: 'http://localhost:8080/search',
// })
class MyProvider extends JsonProvider {
  endpoint({ query, type }) {
    // Result: https://example.com/api/search?q=some%20address&f=json
    console.log("query", query)
    return this.getUrl('http://localhost:8080/search', {
      q: query,
      f: 'json',
    });
  }
  parse({ data }) {
    console.log("Query Data", data)
   
    // Note that `data` is the raw result returned by the server. This
    // method should return data in the SearchResult format.
    return data.map((pin) => ({
      x: pin.location.x,
      y: pin.location.y,
      date: pin.date,
      description: pin.description,
      id: pin.id,
      image: pin.image,
      location: {x: pin.location.x, y: pin.location.y},
      rating: pin.rating,
      species_name: pin.species_name,
      title: pin.title,
      uuid: pin.uuid
    }));
  }
 
}

export default function App() {
  const user = {
    id: 1,
    name: 'Tom Rosenbauer',
    email: 'Tom@orvis.com',
  }
  let startPosition = [49.7303, -125.91];

  const [markers, setMarkers] = useState({});
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editPopup, setEditPopup] = useState({});

  useEffect(() => {
    axios.get('/pins')
      .then((res) => {
        console.log(res)
        const returnData = res.data.reduce((acc, val) => {
          return {...acc, [val.uuid]:{...val, leafletLocation: [val.location.x, val.location.y]}};
        }, {});
        setMarkers(returnData);
      })
      .catch((e) => {
        console.log(e)
      })

  }, []);

  console.log("APP markers", markers);
  console.log("APP editPopup", editPopup);
  // const provider = new Provider({
  //   speciesUrl: 'http://localhost:8080/pins/species'
  // })

  return (
    <div>
      <UserContext.Provider value={user} >
        <Navbar />
        <MapContainer center={startPosition} zoom={8}>
            <GeoSearch provider={new OpenStreetMapProvider()} />
            <SpeciesSearch provider={new MyProvider()} />
            <Layers
              markers={markers}
              setMarkers={setMarkers}
              modal={modal}
              edit={edit}
              editPopup={editPopup}
              setModal={() => {
                setModal((prev) => {
                  return !prev;
                });
              }}
              setEdit={() => {
                setEdit((prev) => {
                  return !prev;
                });
              }}
              setEditPopup={setEditPopup}
            />
            <ModalContainer
              edit={edit}
              setEdit={setEdit}
              markers={markers}
              setMarkers={setMarkers}
              modal={modal}
              setModal={setModal}
              editPopup={editPopup}
              setEditPopup={setEditPopup}
              />

        </MapContainer>

      </UserContext.Provider>
    </div>
  );
}
