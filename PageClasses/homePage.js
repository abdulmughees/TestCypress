class Home{

    constructor(){
        this.image = ".wp-image-91";
        this.intro = ".post-content > h4";

    }

    get Image(){
        return cy.get(this.image);
    }

    get Intro(){
        return cy.get(this.intro);
    }

}

const home = new Home();

export default home