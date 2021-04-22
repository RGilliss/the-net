import { useMap } from 'react-leaflet'
import { GeoSearchControl } from 'leaflet-geosearch'
import {useEffect} from 'react'
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
const Search = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            style: 'bar',
            autoClose: true,
            searchLabel: 'Enter City or Lake',
            keepResult: true,
            showPopup: true,
            marker: {icon: iconMypins}

        })
        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}


export default Search 

