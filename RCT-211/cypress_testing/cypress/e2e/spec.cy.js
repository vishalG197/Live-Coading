
// afterAll
// beforeAll
//beforeEach

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit(' http://localhost:3000')
  })
  it('should visit url', () => {
    cy.visit(' http://localhost:3000')
  });
  it("initial count of the counter should be 0", () =>{
  
cy.get("p").should("have.text","Count: 0")
  })

  it('increments the count', () => {
    
    cy.get('button').contains('Increment').click();
    cy.get('p').should('have.text', 'Count: 1');
  });

  it('decrements the count', () => {
   
    cy.get('button').contains('Decrement').click();
    cy.get('p').should('have.text', 'Count: -1');
  });
})