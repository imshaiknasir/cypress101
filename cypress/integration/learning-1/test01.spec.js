describe('suite 1',()=>{
    it('test1',()=>{
        cy.visit('https://www.ixigo.com/');
        cy.get('.u-v-align-top > .nav-list > :nth-child(2) > .nav-list-item').click();
    });
});