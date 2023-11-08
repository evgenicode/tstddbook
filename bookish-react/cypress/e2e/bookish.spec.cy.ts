/// <reference types="cypress" />

describe("Bookish application", function () {
  it("Visists the bookish", function () {
    cy.visit("http://localhost:3000/");
    cy.get("h2[data-test='heading']").contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div[data-test='book-list']").should("exist");
    cy.get("div.book-item").should("have.length", 2);
  });

  it("Shows a book list2", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div[data-test='book-list']").should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);

      const titles = [...books].map((x) => x.querySelector("h2")!.innerHTML);
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design"]);
    });
  });
});
