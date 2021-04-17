
// import Maps from "./Layers/Maps"
// import Filters from "./Layers/Filters/Filters"
// import RegulationFilter from "./Layers/Regulations/RegulationFilter"
// import {LayersControl} from "react-leaflet";
// import {useRef, useEffect, useState} from 'react';

// const layerNames = [" My Pins", " All Pins", " My Favourites"]

// //Controls the layers of the map interface
// export default function Layers(props) {
//   //Hook to access DOM elements
//   const control = useRef();

//   //Set All pins as toggled by default
//   const [selected, setSelected]= useState("All Pins");

//   useEffect(() => {
//     //targetting the container
//     const container = control.current.getContainer()
   
//     const handleClick = function (event){
//       const sib = event.target.nextSibling
//       //target a toggle
//       const text = sib && sib.innerText;
//        //return a bolean true if toggled
//       const isLayer = text && layerNames.includes(text);
//       if (isLayer && event.target.checked){
//           setSelected(selected === text.trim() ? "" : text.trim())
//       }
//     }

//     container.addEventListener("click", handleClick)
//     return () => container.removeEventListener("click", handleClick)
//     }, [selected])
// console.log("Layers props", props)
//   return (
//     <LayersControl position="bottomright" ref={control}>
//       <Maps/>
//       <RegulationFilter/>
//       <Filters 
//         {...{selected}}
//         edit={props.edit}
//         setEdit={props.setEdit}
//         markers={props.markers}
//         setMarkers={props.setMarkers}
//         modal={props.modal}
//         setModal={props.setModal}
//         editPopup={props.editPopup}
//         setEditPopup={props.setEditPopup}/>

//     </LayersControl>
//   );
// }
