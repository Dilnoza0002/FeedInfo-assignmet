Cypress.Commands.add("login", (email, password) => {
  cy.get("input[name='Login']").type(email);
  cy.get("input[name = 'Password]").type(password);
  cy.contains("SUBMIT").click();
});
