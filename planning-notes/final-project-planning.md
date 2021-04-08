# The Net

## Project Description

Name : Fish me if you can / The Net / Great catch 
Summary (140)
	A map-based app that allows users to drop pins to save and share information about the bounty of their fishing trips while also making laws and regulations easily accessible.
Image: https://unsplash.com/photos/aJlTULOW2x0 or https://unsplash.com/photos/xcjax58lSAA ?
Repo link:
Tech stack: Front: React, Axios, SCSS Back: Node.js, Express DB: postgreSQL

## Region to focus on initially for MVD

### Vancouver Island

- Build our own API for freshwater regulations

Data sources:
(https://www2.gov.bc.ca/assets/gov/sports-recreation-arts-and-culture/outdoor-recreation/fishing-and-hunting/freshwater-fishing/fishing_synopsis.pdf)

(https://www.gofishbc.com/Where-to-Fish.aspx) (What API are they using for the hatchery data)
- My guess is they created their own

Other resources (may or may not be useful for information):
(https://www.fishingvictoria.com/fishing-reports)
(https://search.open.canada.ca/en/od/?sort=score%20desc&page=1&search_text=fishery%20british%20columbia&od-search-format=ESRI%20REST) (this has information on things like herring, or chinook salmon, other individual fisheries, filtered by ones that have API access)

Interesting project (no longer active) for fly fishing, along similar lines to our project maybe?
(https://github.com/defenestrator/hatches-api)

## Data to include:

- fishery regulations:
	- time of year
	- type of fish
	- min size
	- max size
	- Amount allowed to keep
	- type of fishing
	- boats allowed? Type of motor

- Research, find other API for saltwater fisheries? Vulnerable species? 
- Implement restrictions of where you can drop pins (restricted areas, reserve land)

### App:

Two 'streams' for the app:
------> user input, being able to place pins with information about fishing areas, catches, etc 
        Uses Google maps API. DB for user input data persist, 

------> Regulations, fishing restrictions API

How to integrate regulations API with Google Maps API

### Filters

- salt/fresh water
- fish type
- date
- distance from current location
- distance from shore
- if we do another area than Vancouver Island, we might want to filter by region? Area?
- (stretch) private/public/group

Hosting: Heroku? (can migrate API db easily with their heroku postgres) and link to github repo so the current commit is always live

### Stretch

- Place private pins, share private links to pins
- Auth 0 (login with google/FB)
- Add saltwater fishing regulations and pins
- Add saltwater regulations for prawning and crabbing 
- Nearby threat notifications
- Heroku
- Cypress end-to-end test
- user can add pictures
- user can add safety warning

Outside of scope for the project at this time:

- Web scraper for  Government websites to convert up to date fisheries closures, notices, into the API for use in the app
(https://notices.dfo-mpo.gc.ca/fns-sap/index-eng.cfm)
(https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/bc-zones-cb-eng.html)

#### Wireframe link

https://elodiebouthors528653.invisionapp.com/freehand/The-Net-bbSZUtbIO


***
## ERD
(https://drive.google.com/file/d/1xCmV1SQthk0XOW7mQte6bfhxjHpab63f/view?usp=sharing)
