import { JsonProvider } from "leaflet-geosearch";

class MyProvider extends JsonProvider {
  endpoint({ query, type }) {
    return this.getUrl('http://localhost:8080/search', {
      q: query,
      f: type,
    });
  }
  parse({ data }) {
   
    // Note that `data` is the raw result returned by the server. This
    // method should return data in the SearchResult format.
    return data.map((pin) => ({
      ...pin,
      x: pin.location.x,
      y: pin.location.y,
      label: pin.title,
      bounds: [[49.7303, -125.91], [49.8, -125]],
    }));
  }
}

export default MyProvider;