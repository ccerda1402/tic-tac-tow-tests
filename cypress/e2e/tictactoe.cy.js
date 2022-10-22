

describe('tic tac toe game', () => {

  /* this test case verifies that:
    1. a grid is generated and visible once play is clicked
    2. the number of tr elementd within the table element equals the number entered by the user
  */

  it('game grid is correctly generated', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/')
    cy.get('#number').type('4');
    cy.get('button[id="start"]').click();
    cy.get('#table').should('be.visible');
    cy.get('#table').children().should('have.length', 4);
  })
    
/* this test case verifies that:
    1. all grid boxes can be filled 
    2. the application indicates the end of a game
    3. user can refresh the page and generate a new grid
*/

  it('user can finish and start new game', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/')
    cy.get('#number').type('3');
    cy.get('button[id="start"]').click();
    cy.get('[data-column]').click({multiple: true});
    cy.get('#endgame').should('be.visible');
    cy.reload();
    cy.get('#number').type('3');
    cy.get('button[id="start"]').click();
    cy.get('#table').should('be.visible');
  })

  it('user runs out of boxes and no player wins', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/')
    cy.get('#number').type('3');
    cy.get('button[id="start"]').click();
    cy.get('#0').click();
    cy.get('#3').click();
    cy.get('#6').click();
    cy.get('#2').click();
    cy.get('#5').click();
    cy.get('#8').click();
    cy.get('#7').click();
    cy.get('#4').click();
    cy.get('#1').click();

    cy.get('#endgame').should('not.be.visible');
  })

})