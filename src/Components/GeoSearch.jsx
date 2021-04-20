
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';
import {useEffect} from 'react';

// make new leaflet element
const Search = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            autoClose: true,
            searchLabel: 'Enter city'
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}


export default Search 

