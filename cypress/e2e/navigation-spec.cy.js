describe("Page scroll and navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("scrolling the page should highlight the corresponding navigation link", () => {
    cy.scrollTo("bottom");
    cy.get(".nav-link.active").should("have.attr", "href", "#contact");

    cy.scrollTo("top");
    cy.get(".nav-link.active").should("have.attr", "href", "#");

    cy.scrollTo("bottom");
    cy.get(".nav-link.active").should("have.attr", "href", "#contact");
  });

  it("clicking on a navigation link should scroll to the corresponding section", () => {
    cy.get('.nav-link[href="#services"]').click();
    cy.url().should("contain", "#services");
    cy.get("#services").should("be.visible");

    cy.get('.nav-link[href="#about"]').click();
    cy.url().should("contain", "#about");
    cy.get("#about").should("be.visible");
  });
});
