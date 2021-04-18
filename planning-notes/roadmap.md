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

### Stretch

- [ ] User Login (Auth0) (Maybe not)
- [ ] Saltwater Vancouver Island regulations
- [ ] Saltwater regulations filter
- [ ] Add feature to pins that display regulations within a nearby radius
- [ ] Darkmode / Alternative theme toggle?
- [x] Different coloured pins
- [ ] Private/Public pins

### Bugs / TO-DO

- [ ] Break out Marker Form component to helpers
- [x] Non ending POST axios req in the onSubmit of marker form
- [ ] Fix incorrect regulations locations
- [ ] Fix issue of regulations displaying on top of each other
- [ ] Style regulations card, pin card, and submit form to be alike
- [ ] Fix Mapbox satellite view issues
- [ ] Search box doesn't close
- [x] Pin Popup doesn't close on delete submit
- [x] Decide on how to style navbar (or have navbar at all?)
- [ ] If you click on filter text instead of the check box, app crashes and throws Inner Text of null error
- [ ] Work our way through all the warnings and get them out of there, they could have weird side effects
- [ ] Clean up codebase, remove console.logs, remove unused code, maybe refactor some of the unwieldy components
- [ ] Species not showing from DB seeds (may not be important)
- [ ] In edit the date must be filled out or it glitches
- [ ] My Favourites filter doesn't grab objects in state
- [ ] Date on edit popup must be filled out and can't be the same date or it errors out   

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
- [ ] My Favourites GET call working


### April 18 - 21

- [ ] Logo
- [ ] Testing
- [ ] Presentation prep
- [ ] Readme
- [ ] Screenshots, gifs for Readme
