class LoginPage {

    get emailImputField() { return cy.get('[class="form-control"]')}
    get continueButton() { return cy.get('[id="sign-in-button"]')}
    get passwordInputField() { return cy.get('[id="loginFormPasswordInputField"]')}
    get skipForNowButton() { return cy.get('[id="bypassOptionalMfaButton"]')}
    

}