import { JsonProvider, OpenStreetMapProvider } from "leaflet-geosearch";


class MyProvider extends JsonProvider {
  endpoint({ query, type }) {
    console.log("query", query)
    return this.getUrl('http://localhost:8080/search', {
      q: query,
      f: 'json',
    });
  }
  parse({ data }) {
    console.log("Query Data", data)
  

    return data.map((pin) => ({
      x: pin.location.y,
      y: pin.location.x,
      label: `${pin.title}, ${pin.rating}, ${pin.species_name} `,
      bounds: [
        [pin.location.x, pin.location.y], 
       [pin.location.x, pin.location.y]]
      
    }));
  }
}


export default MyProvider;