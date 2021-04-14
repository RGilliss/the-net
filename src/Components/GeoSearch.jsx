
import { Map, useMap } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import react, {useEffect} from 'react'

// make new leaflet element
const Search = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}


export default Search 

