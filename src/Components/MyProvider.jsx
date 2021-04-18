import { JsonProvider } from "leaflet-geosearch";

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
   
    // Note that `data` is the raw result returned by the server. This
    // method should return data in the SearchResult format.
    return data.map((pin) => ({
      ...pin,
      x: pin.location.x,
      y: pin.location.y,
      label: pin.title,
      bounds: [[51.4, -127.5], [48.5, -123]],
      
    }));
  }
}

export default MyProvider;