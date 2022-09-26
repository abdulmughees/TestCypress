import login from "../../PageClasses/loginPage.js"

describe('Open test login page', () => {
  it('Login Test', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.fixture("logindetails.json").then((user) =>{
      login.Username.type(user.username);
      login.Password.type(user.password);
    });

    login.SubmitButton.click();
 
    cy.contains("Logged In Successfully").should("be.visible");
    
  })

});