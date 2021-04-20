
describe("Pins", () => {
  // Visits the root of our web server
  it("should visit root", () => {
    cy.visit("http://localhost:3002/");
  });

  it("should create a new pin", () => {
    //dbl click on the map and a form opens
    cy.get('.leaflet-container').dblclick();

    //Enter a title
    cy.get("[data-test-title=title-input]").type("Alan's spot");

    //select a date --> click on the icon and select a date
    cy.get('#date').click()
  
    //Select a species -->click on species and select a species
    cy.get("[data-test-species=select-species]").click();
    cy.contains('Bull Trout').click();
    
    // Rate a spot
    cy.get('.MuiRating-root').click();

    //Enter a comment
    cy.get("[data-test-text=enter-text]").type("Awesome spot");

    // Add a link for pictures
    cy.get("[data-test-link=enter-link]").type("https://fishingbooker.com/blog/media/hero-lures.jpg");
    
   //click on Submit to create a pin on the map
    cy.contains("SUBMIT").click();

  });


 





});