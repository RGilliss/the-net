import { Map, useMap, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl, JsonProvider} from 'leaflet-geosearch'
import {useEffect, useState} from 'react'
import L from "leaflet";


const iconUrl = require('../images/marker-icon-2x-red.png').default;

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
// make new leaflet element
const SpeciesSearch = (props) => {
    const map = useMap() // access to leaflet map
    const [searchPins, setSearchPins] = useState([])
    
    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider: props.provider,
            autoClose: true,
            searchLabel: 'Enter species',
            propertyName: 'species_name',
            showPopup: true,
            position: "topright",
            maxMarkers: 10,
            keepResult: true,
            marker: {icon: iconMypins}
            // marker: {
            //     // optional: L.Marker    - default L.Icon.Default
            //     icon: new L.Icon.Default(),
            //     draggable: false,
            //   },
           
        })
        console.log("searchControl", searchControl)
        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        setSearchPins(searchControl.resultList.results)
        console.log("searchPins", searchPins)

        return () => map.removeControl(searchControl)
        
    }, [props])
    console.log("Search", searchPins)
    return (
    //     <>
    //     {returnData.map((myPin) => (
  
    //       <Marker
    //         key={myPin.id}
    //         position={[myPin.location.x, myPin.location.y]}
    //         icon = {iconMypins}
    
    //       >
    //         <Popup>
    //           <PopupDisplay
    //             title={myPin.title}
    //             description={myPin.description}
    //             date={myPin.date}
    //             image={myPin.image}
    //             rating={myPin.rating}
    //             location={myPin.location}
    //             species_name={myPin.species_name}
    //             user_id={myPin.user_id}
    //           />
    //         </Popup>
    //       </Marker>
    //     ))}
    //   </>
    null
    )
}

export default SpeciesSearch 