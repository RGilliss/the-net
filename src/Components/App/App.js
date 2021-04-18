import { MapContainer, ZoomControl } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import Layers from "../Layers/Layers";
import { useState, useEffect } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import GeoSearch from "../GeoSearch";
import ModalContainer from "../Modal/ModalContainer";
import axios from "axios";
import UserContext from '../UserContext'
import SpeciesSearch from "../SpeciesSearch";
import MyProvider from '../MyProvider'


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
  
  return (
    <div>
      <UserContext.Provider value={user} >
        <Navbar />
        <MapContainer center={startPosition} zoom={8}>
          <ZoomControl position={'bottomleft'} />
            <GeoSearch provider={new OpenStreetMapProvider()} />
            <SpeciesSearch showPopup={true} showMarker={true} provider={new MyProvider()} />
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
