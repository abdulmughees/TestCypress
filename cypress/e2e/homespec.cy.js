import home from "../../PageClasses/homePage.js"

describe('Verify Home page', () => {
    it('Verify Image on Home Page', () => {
        cy.get(home.image).should("be.visible");
    
    });

    it('Verify Intro section on Home Page', () => {
        cy.contains("Hi! My name is Dmitry Shyshkin.")
        .should("be.visible");
        cy.get(home.intro).should("be.visible");
    })
    
    });