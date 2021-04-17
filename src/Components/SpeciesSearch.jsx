import { Map, useMap, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl, JsonProvider } from 'leaflet-geosearch'
import {useEffect} from 'react'


// make new leaflet element
const SpeciesSearch = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props
    console.log("speciesSearch", props)

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            autoClose: true,
            searchLabel: 'Enter species'
        })
        console.log("searchControl", searchControl)
        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}

export default SpeciesSearch 