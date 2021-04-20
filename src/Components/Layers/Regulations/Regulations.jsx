import useAxios from "axios-hooks";
import { Popup, Circle, Polygon, Rectangle } from "react-leaflet";
import RegulationsCard from "./RegulationsCard";
import {waterSize, regulationColor} from "../../helpers/RegulationHelpers"

//Places regulations on the map and fills in the details from RegulationsCard
export default function Regulations() {
  const [{ data, loading, error }] = useAxios(
    "/regulations"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const returnData = data.regulations;
  console.log("returnData",returnData)
  function lakeCircle(regulation) {
    console.log('Lake Circle Regulation', regulation)
    const regColor = regulationColor(regulation.reg_colour);
        return (        
          <>
          <Circle
            key={regulation.id}
            center={[regulation.location.x, regulation.location.y]}
            radius={waterSize(regulation.circle_size)}
            pathOptions={{color: regColor}}
          >
          <Popup>
            <RegulationsCard
              water_body={regulation.water_body}
              class_water={regulation.class_water}
              tributary={regulation.tributary}
              stocked={regulation.stocked}
              accessible={regulation.accessible}
              regulation={regulation.regulation}
              date_range={regulation.date_range}
            />
          </Popup>
          </Circle>
          </>
        )
    }

    function lakeRectangle(regulation) {
      console.log('Lake Rectangle Regulation', regulation)
      const polygonSize = [[regulation.location.x, regulation.location.y], [regulation.size_water.x, regulation.size_water.y]]
      const regColor = regulationColor(regulation.reg_colour);
      return (        
        <>
        <Rectangle
          key={regulation.id} 
          bounds={polygonSize}
          pathOptions={{color: regColor}}
        >
          <Popup>
            <RegulationsCard
              water_body={regulation.water_body}
              class_water={regulation.class_water}
              tributary={regulation.tributary}
              stocked={regulation.stocked}
              accessible={regulation.accessible}
              regulation={regulation.regulation}
              date_range={regulation.date_range}
            />
          </Popup>
        </Rectangle>
        </>
      )
  }

  const regs = returnData.map((regulation) => {
    if(regulation.size_water) {
      return lakeRectangle(regulation)
    }
    else {
      return lakeCircle(regulation)
    }
  })
      



  return (
    <>
      {regs}
    </>
  );
}
