class Login{

    constructor(){
        this.username = "#username";
        this.password = "#password";
        this.submitbtn = "#submit";

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

}

const login = new Login();

export default login