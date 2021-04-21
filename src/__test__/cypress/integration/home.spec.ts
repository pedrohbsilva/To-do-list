describe('Home page', () => {
  it('Should load with correct initial state', () => {
    cy.visit('/');
    cy.contains('To do list').should('to.have.length', 1);
  });
  it('Should add a new task in my list', () => {
    cy.visit('/');
    cy.getByTestId('input-add-task').type('study today at 18pm');
    cy.getByTestId('button-add-task').click();
    cy.getByTestId('list-row').should('to.have.length', 1);
    cy.contains('study today at 18pm').should('to.have.length', 1);
  });
});
