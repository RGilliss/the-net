import { JsonProvider, OpenStreetMapProvider } from "leaflet-geosearch";


class MyProvider extends OpenStreetMapProvider {
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
      // ...pin,
      raw: {// place_id:                //string;
      license: "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",            //string;
      osm_type: "relation",           //string;
      osm_id: 1783980,             //number;
      boundingbox: [pin.location.x.toString(), pin.location.x.toString(), pin.location.y.toString(), pin.location.y.toString()],       //[string, string, string, string];
      lat: pin.location.y.toString(),                //string;
      lon: pin.location.x.toString(),                //string;
      display_name: "Hello",                 //string;
      class: "natural",                 //string;
      type: "administrative",                 //string;
      importance: 0.7514801395324393,             //number;
      icon: "https://nominatim.openstreetmap.org/ui/mapicons//poi_boundary_administrative.p.20.png",  },               //string;
      x: pin.location.y,
      y: pin.location.x,
      
      label: pin.title,
      bounds: [
        [pin.location.x, pin.location.y], 
       [pin.location.x, pin.location.y]],
      
    }));
  }
}
// class MyProvider extends OpenStreetMapProvider {
//   constructor(options) {
//     super({
//       ...options,
//       searchUrl: 'http://localhost:8080/search',
//       reverseUrl: 'http://localhost:8080/search',
//     });
//   }
// }

export default MyProvider;