# The Net

The Net is a map-based app that allows users to save and share information about their fishing trips. It combines the social fun of sharing locations and catches with friends and community while also streamlining regulations and bylaws that are often in non-centralized locations and difficult to keep up to date on. The Net was created by [Elodie Bouthors](https://github.com/elodiebhs), [Liam Butler](https://github.com/brjl), and [Rye Gilliss](https://github.com/RGilliss).

The Net uses the [BC Fishing Regulation API](https://github.com/brjl/bc-fishing-regs-api), created by The Net team, in order to collect, organize, and serve the myriad regulations for sport fishing on Vancouver Island. In the future, the API could expand to cover all of BC and Alberta, as well as Pacific saltwater regulations. 

## Getting Started

You can visit a live version of The Net here.

For localhost set up, please first fork and clone the [BC Fishing Regulation API](https://github.com/brjl/bc-fishing-regs-api) and follow instructions in the README for set up. 

Then we recommend:

1. Clone The Net into your local environment.
2. Install dependencies with npm install.
3. In your PostgreSQL database, run the create file to create the database. 
4. Run the server and then in a separate terminal run The Net with npm start.

## Dependencies

- React
- Axios
- Leaflet
- Material UI
- UUID
- PostgreSQL

### Screenshots

#### Main Page
!["Screenshot of Main Page"](https://raw.githubusercontent.com/brjl/the-net/master/documents/1_Home%20Page.png)

#### Other View and Filters
!["Screenshot of view"](https://raw.githubusercontent.com/brjl/the-net/master/documents/Other_view.png)

#### Filters
!["Screenshot of Filters"](https://raw.githubusercontent.com/brjl/the-net/master/documents/2_Filters.png)

#### Search Bar
!["Screenshot of Search Bar"](https://raw.githubusercontent.com/brjl/the-net/master/documents/Search_Bar.png)

#### Pin's Colour changing for My Pins and Favourites
!["Screenshot of Pin's Colour"](https://github.com/brjl/the-net/blob/master/documents/Pins_colour.png)

#### Pin's View
!["Screenshot of pins' view"](https://raw.githubusercontent.com/brjl/the-net/master/documents/Pins_view.png)


#### Edit Pin
!["Screenshot of Edit Pin"](https://raw.githubusercontent.com/brjl/the-net/master/documents/Edit.png)


#### Regulations View
!["Screenshot of Regulations View"](https://raw.githubusercontent.com/brjl/the-net/master/documents/Regulation_view.png)

#### Regulation Pin
!["Screenshot of Regulations View"](https://raw.githubusercontent.com/brjl/the-net/master/documents/Regulation_example.png)




