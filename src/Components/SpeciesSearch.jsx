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
    const { provider } = props
    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            autoClose: true,
            searchLabel: 'Enter species',
            propertyName: 'species_name',
            showMarker: true,
            showPopup: true,
            position: "topright",
            maxMarkers: 10,
            keepResult: true,
            // marker: {icon: iconMypins}          
        })
        console.log("searchControl", searchControl)
        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        console.log("searchControl.resultList.results", searchControl.resultList.results)

        return () => map.removeControl(searchControl)
        
    }, [props])
    return null
    
}

export default SpeciesSearch 