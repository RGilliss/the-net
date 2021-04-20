import { JsonProvider, OpenStreetMapProvider } from "leaflet-geosearch";


class MyProvider extends JsonProvider {
  endpoint({ query, type }) {
    return this.getUrl('http://localhost:8080/search', {
      q: query,
      f: 'json',
    });
  }
  parse({ data }) {
   
    // Note that `data` is the raw result returned by the server. This
    // method should return data in the SearchResult format.

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