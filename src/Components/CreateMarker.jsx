import React, { useState } from 'react'
import {useMapEvents, Marker, Popup} from "react-leaflet";

export default function CreateMarker() {
  const [markers, setMarkers] = useState([])
  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng
      setMarkers([...markers, newMarker])
    }
  })
  return (
    <>
    {/* needs a unique id */}
    {markers.map(marker => 
    <Marker position={marker}>
      <Popup>{marker.lat}, {marker.lng}</Popup>
    </Marker>
      )}
    </>
  )
}