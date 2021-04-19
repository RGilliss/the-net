import { Map, useMap, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl, JsonProvider } from 'leaflet-geosearch'
import {useEffect} from 'react'


// make new leaflet element
const SpeciesSearch = (props) => {
    const map = useMap() // access to leaflet map
    const { provider } = props
    
    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            autoClose: true,
            searchLabel: 'Enter species'
        })
        
        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

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