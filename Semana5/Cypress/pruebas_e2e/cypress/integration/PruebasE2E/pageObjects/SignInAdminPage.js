class SignInAdminPage {

    loginParams = cy.fixture('loginData.json');

    loginUser(username, password) {
        //cy.login('c.toros@uniandes.edu.co','WhatABeautifulDay');
        cy.login(username,password);
    }

    loginUserDefault() {
        cy.login(loginParams.username1,loginParams.password1);
    }

}

export default SignInAdminPage