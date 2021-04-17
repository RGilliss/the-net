import useAxios from "axios-hooks";
import { Popup, Circle } from "react-leaflet";
import RegulationsCard from "./RegulationsCard";

//Places regulations on the map and fills in the details from RegulationsCard
export default function Regulations() {
  const [{ data, loading, error }] = useAxios(
    "/regulations"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const returnData = data.regulations;

  

  return (
    <>
      {returnData.map((regulation) => (
      
          <Circle
            key={regulation.id}
            center={[regulation.location.x, regulation.location.y]}
            radius={2000}
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
      ))}
    </>
  );
}
