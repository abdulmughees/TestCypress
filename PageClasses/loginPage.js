class Login{

    constructor(){
        this.username = "#username";
        this.password = "#password";
        this.submitbtn = "#submit";
        this.homepage = '#menu-item-43 > a';

    }

    get Username(){
        return cy.get(this.username);

    }

    get Password(){
        return cy.get(this.password);

    }

    get SubmitButton(){
        return cy.get(this.submitbtn);

    }

    get HomePageLink(){
        return cy.get(this.homepage);
        
    }

}

const login = new Login();

export default login