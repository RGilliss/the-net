import { MapContainer } from "react-leaflet";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import GeoSearch from "../GeoSearch";
import ModalContainer from "../Modal/ModalContainer";
import axios from "axios";
import UserContext from "../UserContext";
import SpeciesSearch from "../SpeciesSearch";
import MyProvider from "../MyProvider";
import Navbar from "../Navbar";
import Layers from "../Layers/Layers";
import { useState, useEffect } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const useStyles = makeStyles((theme) => ({
  searchSwitch: {
    position: "absolute",
    zIndex: 500,
    marginLeft: "500px",
    marginTop: "-30px",
  },
  search: {
    display: "flex",
    flexdDirection: "column",
    justifyContent: "center",
  },
}));

export default function App() {
  const classes = useStyles();
  const user = { id: 1 };
  const startPosition = [49.7303, -125.91];

  const [markers, setMarkers] = useState({});
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editPopup, setEditPopup] = useState({});
  const [search, setSearch] = useState(true);

  useEffect(() => {
    axios.get("/pins").then((res) => {
      const returnData = res.data.reduce((acc, val) => {
        return {
          ...acc,
          [val.uuid]: {
            ...val,
            leafletLocation: [val.location.x, val.location.y],
          },
        };
      }, {});
      setMarkers(returnData);
    }, {});
  }, []);

  return (
    <div>
      <UserContext.Provider value={user}>
        <Navbar setSearch={setSearch} search={search} />
        <MapContainer center={startPosition} zoom={8}>
          <div className={classes.search}>
            {search ? (
              <GeoSearch provider={new OpenStreetMapProvider()} />
            ) : (
              <SpeciesSearch provider={new MyProvider()} />
            )}
          </div>
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
