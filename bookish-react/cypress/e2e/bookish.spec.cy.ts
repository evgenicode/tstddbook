/// <reference types="cypress" />

describe("Bookish application", function () {
  it("Visists the bookish", function () {
    cy.visit("http://localhost:3000/");
    cy.get("h2[data-test='heading']").contains("Bookish");
  });
});
