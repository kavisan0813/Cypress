
it('passes', () => {
    cy.fixture('data.json').then((data) => {
        for(var l in data) {
            cy.visit('https://internshala.com')
            cy.get('.navbar-nav > :nth-child(5) > .btn').click()
            cy.get('#modal_email').type(data[l].email)
            cy.get('#modal_password').type(data[l].password)
            cy.get('#modal_login_submit').click()
            cy.get('.profile_container_hover > .nav-link > .is_icon_header').click()
            cy.get('#internships_new_superscript').click()
        }
    })    


});


it('fail', () => {
    cy.fixture('data2.json').then((data) => {
        for(var l in data) {
            cy.visit('https://internshala.com')
            cy.get('.navbar-nav > :nth-child(5) > .btn').click()
            cy.get('#modal_email').type(data[l].email)
            cy.get('#modal_password').type(data[l].password)
            cy.get('#modal_login_submit').click()
             
        }
    })    


});