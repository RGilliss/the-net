import { MapContainer } from "react-leaflet";
import "./App.css";
import Navbar from "../Navbar";
import Layers from "../Layers/Layers";
import { useState, useEffect } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import GeoSearch from "../GeoSearch";
import ModalContainer from "../Modal/ModalContainer";
import axios from "axios";

export default function App() {
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
      <Navbar />
      <MapContainer center={startPosition} zoom={8}>

        <GeoSearch provider={new OpenStreetMapProvider()} />
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
        {/* <Markers/>      */}
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
    </div>
  );
}
