/// <reference types="cypress" />

describe("Bookish application", function () {
  before(() => {
    cy.request("DELETE", "http://localhost:8080/books?_cleanup=true");
  });

  afterEach(() => {
    cy.request("DELETE", "http://localhost:8080/books?_cleanup=true");
  });
  beforeEach(() => {
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven design", id: 2 },
      { name: "Building Microservices", id: 3 },
    ];
    cy.wrap(books).each((item) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8080/books",
        headers: { "Content-Type": "application/json" },
        body: item,
      });
    });
  });

  it("Visists the bookish", function () {
    cy.visit("http://localhost:3000/");
    cy.get("h2[data-test='heading']").contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div[data-test='book-list']").should("exist");
    cy.get("div.book-item").should("have.length", 3);
  });

  it("Shows a book list2", () => {
    cy.visit("http://localhost:3000/");

    cy.get("div[data-test='book-list']").should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map((x) => x.querySelector("h2")!.innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });
});
