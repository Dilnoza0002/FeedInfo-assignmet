class SearchPage {
  searchBox() {
    return cy.get("input.search-form__keyword");
  }
  searchResults() {
    return cy.get(".search-results-item__title");
  }
  loadMoreButton() {
    return cy.contains("LOAD MORE");
  }
  page() {
    return cy.get("body");
  }
  orderButton() {
    return cy.contains("Order");
  }
  mostRecentCheckbox() {
    return cy.contains("Most recent");
  }
  locationFilter() {
    return cy.contains("Location");
  }
  USA() {
    return cy.contains("USA");
  }
  clearFilters() {
    return cy.contains("Clear filters");
  }
  checkboxForUSA() {
    return cy.get('input[value="USA"]');
  }
}
export default SearchPage;
