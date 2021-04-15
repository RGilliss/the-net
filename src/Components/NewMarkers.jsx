import { useMapEvents, Marker, Popup } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";

//Places new markers on the map after a user submits the Marker Form
export default function NewMarkers(props) {

  return (
    <>
      {props.popups.map((popup) => (
        <Marker key={popup.leafletLocation} position={popup.leafletLocation}>
          <Popup>
            <PopupDisplay
              date={popup.date}
              title={popup.title}
              description={popup.description}
              species={popup.species}
              image={popup.image}
              rating={popup.rating}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
