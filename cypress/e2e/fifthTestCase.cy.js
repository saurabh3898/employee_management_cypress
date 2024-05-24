describe('Test Cases', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/') 
    })
  
    it('Change the Status of an Employee', () => {
      //Validating landed on right page 
      cy.get('.text-xl').should('have.text','Employee List')
  
      //Navigating to add employee
      cy.get('.inline-block').click()
      cy.get('.text-center').should('have.text','Add Employee')
  
      //Filling Form
      cy.get('#name').type('Saurabh Dhanawade')
      cy.get('#dob').clear().type('08-03-1998')
      cy.get('#salary').clear().type('10000')    
      cy.get("input[id='joining date']").clear().type('05/22/2024')
      cy.get('#salary').click()
  
      cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type('05/22/2046')
      cy.get('#contact').type('7066737409')
      cy.get('#status').select('active')
  
      //Submitting Form
      cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
  
      //Validate successfully submitted 
      cy.get('.text-xl').should('have.text','Employee List')

      //Click on Edit 
      cy.get(':nth-child(8) > .inline-block').click()

      //click on Status
      cy.get('#status').select([])

      cy.get('#status').select('inactive')

      //Submitting Form
      cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
  
      //Validate successfully submitted 
      cy.get('.text-xl').should('have.text','Employee List')

      //validate the status of the employee
      cy.get('.divide-y > tr > :nth-child(7)').should('have.text','inactive')


    })
  
  })