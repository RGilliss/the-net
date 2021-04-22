import { useMap } from 'react-leaflet'
import { GeoSearchControl } from 'leaflet-geosearch'
import { useEffect } from 'react'



// make new leaflet element
const SpeciesSearch = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            autoClose: true,
            style: 'bar',
            searchLabel: 'Search Pins',
            propertyName: 'title',
            showMarker: false,
            keepResult: true,        
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])
    return null
    
}

export default SpeciesSearch 