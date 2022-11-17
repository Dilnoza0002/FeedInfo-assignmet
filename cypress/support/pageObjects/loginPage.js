class LoginPage {
  emailBox() {
    return cy.get("input[name='Login']");
  }
  passwordBox() {
    return cy.get("input[name = 'Password]");
  }
  submitButton() {
    return cy.contains("SUBMIT");
  }
  page() {
    return cy.get("body");
  }
  forgottenPassword() {
    return cy.contains("Forgotten password");
  }
}
export default LoginPage;
