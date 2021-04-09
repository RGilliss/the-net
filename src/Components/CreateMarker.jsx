import React, { useState } from 'react'
import {useMapEvents, Marker, Popup} from "react-leaflet";

export default function CreateMarker() {
  const starterPins = [[49.8303, -125.81],[49.74, -125.891], [49.7383, -124.91],[50.7303, -125.91],[49.7303, -126.91], [49.8903, -125.91],]
  const [markers, setMarkers] = useState(starterPins)
  const map = useMapEvents({
    dblclick(e) {
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