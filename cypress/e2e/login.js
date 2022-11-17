///<reference types = "Cypress" />
import LoginPage from "../support/pageObjects/loginPage";
const { includes } = require("lodash");
const loginPage = new LoginPage();

describe("Login", function () {
  beforeEach(function () {
    cy.fixture("login.json").then(function (data) {
      this.loginData = data;
    });
    cy.visit(Cypress.env("loginURL"));
  });

  it("Login with incorrect credentials is impossible", function () {
    cy.login(this.loginData.invalidEmail, this.loginData.invalidPassword);
    loginPage.page().should("contain.text", "Login was unsuccessful");
  });

  it("Invalid Email Format gives an error message", function () {
    loginPage.emailBox().type("Invalid Email Format");
    loginPage.passwordBox().type("Just a Password");
    loginPage.submitButton().click();
    loginPage.page().should("include.text", "not a valid e-mail address");
  });

  it("Empty Email and/ord Password fields give an error when clicked on Submit button", function () {
    loginPage.submitButton().click();
    loginPage
      .page()
      .should("include.text", "The Login field is required")
      .and("include.text", "The Password field is required.");
  });

  it("Invalid email gives an error message in Reset Password page", function () {
    loginPage.forgottenPassword().click();
    loginPage.emailBox().type(this.loginData.invalidEmail);
    loginPage.submitButton().click();
    loginPage
      .page()
      .should("include.text", "User with this email could not be found");
  });
});
