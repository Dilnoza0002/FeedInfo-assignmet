///<reference types = "Cypress" />
import SearchPage from "../support/pageObjects/searchPage";
const { includes } = require("lodash");
const searchPage = new SearchPage();

describe("Search functionality", function () {
  this.beforeEach(function () {
    cy.fixture("search.json").then(function (data) {
      this.searchData = data;
    });
    cy.visit(Cypress.env("searchURL"));
  });
  it("User successfully searchs for a keyword", function () {
    searchPage.searchBox().type(this.searchData.keyword);
    searchPage.page().should("contain.text", "Search Results");
  });

  it("Verify if Load More button is visible when there are more than 8 results", function () {
    searchPage.searchBox().type("product");
    searchPage.searchResults().should("have.length", 8);
    searchPage.loadMoreButton().should("be.visible").click();
    SearchPage.searchResults().should("have.length", 16);
  });

  it("Verify the error message when the search result is null", function () {
    searchPage.searchBox().type(this.searchData.noResultKeyword);
    searchPage.page().should("contain.text", this.searchData.noResultMessage);
  });

  it("Verify if all the filter buttons are present", function () {
    searchPage
      .page()
      .should("contain.text", "Order", "Section", "Location", "Month", "Year");
  });

  it("Verify if Clear filters button", function () {
    searchPage.searchBox().type("product");
    searchPage.locationFilter().click();
    searchPage.USA().click();
    searchPage.clearFilters().should("be.visible").click();
    searchPage.locationFilter().click();
    searchPage.checkboxForUSA().should("not.be.checked");
  });
});
