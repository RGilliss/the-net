# Roadmap

## Planning

### Thursday, April 8th

- [x] Wireframe
- [x] ERD
- [x] Install Leaflet

## Features

### April 12 - 17

What are the features? Divide up amongst ourself into do-able units

- [x] Development database set up
- [x] Draggable map action
- [x] Place a pin with form
- [x] View pin data when clicked
- [x] Heroku
- [x] Create regulation api
- [x] Connect regulation api
- [x] View regulations on map
- [x] Edit pin data
- [x] Delete pin
- [x] Filter pins
- [x] My Favourite pins
- [x] Search Bar

### April 16
- [x] Scrap MarkerCreation.jsx
- [x] onSubmit &&  onCancel => setEdit(false)
- [x] Existing markers description and species pre-populated in editPopup
- [x] Change Date formatting to show in edit form
- [x] Create edited popup object and put to API
- [x] Set edited popup state

- [x] Import Context API and create user component
- [x] Create app context (wrap context provider in app.js) with current_user variable set to 1 in user component
- [x] Complete Favourites integration with current_user var, start icon toggles the post and delete axios calls
- [x] Favourite API calls working
- [x] My Favourites GET call working

### Stretch

- ~~User Login (Auth0) (Maybe not)~~
- ~~Saltwater Vancouver Island regulations~~
- ~~Saltwater regulations filter~~
- ~~Add feature to pins that display regulations within a nearby radius~~
- ~~Darkmode / Alternative theme toggle?~~
- [x] Different coloured pins
- ~~Private/Public pins~~

### Bugs / TO-DO

- [x] Break out Marker Form component to helpers
- [x] Non ending POST axios req in the onSubmit of marker form
- [x] Search box doesn't close
- [x] Pin Popup doesn't close on delete submit
- [x] Decide on how to style navbar (or have navbar at all?)
- [x] If you click on filter text instead of the check box, app crashes and throws Inner Text of null error
- [x] Fish species not changing in edit (in state)
- [x] Style regulations card, pin card, and submit form to be alike (Elodie)
- [x] Species not showing from DB seeds in All Pins (Liam)
- [x] In edit the date must be filled out or it glitches (Rye)
- [ ] Fix incorrect regulations locations (Rye)
- [ ] Fix issue of regulations displaying on top of each other (Rye)
- [ ] Fix Mapbox satellite view issues (Liam)
- [ ] Work our way through all the warnings and get them out of there, they could have weird side effects (All)
- [ ] Clean up codebase, remove console.logs, remove unused code, maybe refactor some of the unwieldy components (All)
- [x] Edit and Delete button don't work when viewing my pins
- [x] Edit and Delete button don't work when viewing my favourites
- [x] Favourites: Star persists in state but not on refresh
- [ ] Favourites: When you mark a favourite you cannot see it immediately (in state) from My Favs filter
- [ ] My Pins: When you make a new pin you cannot see it immediately(in state) from My Favs filter
- [x] Favourites: You can set the same pin as a favourite multiple times if you refresh + add


### April 21
- [x] Species Search
- [x] Logo
- [x] Testing
- [ ] Presentation prep
- [ ] Readme
- [ ] Screenshots, gifs for Readme
- [ ] Deploy to Heroku

### April 22

- [ ] Presentation

