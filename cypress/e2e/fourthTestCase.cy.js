describe('Test Cases', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/') 
    })
  
    it('Delete the Record of Employee', () => {
     
               //Validating landed on right page 
               cy.get('.text-xl').should('have.text','Employee List')
  
               //Navigating to add employee
                cy.get('.inline-block').click()
                cy.get('.text-center').should('have.text','Add Employee')
       
              //Filling Form
              cy.get('#name').type('Prashant Bodhale')
              cy.get('#dob').clear().type('12-25-1980')
              cy.get('#salary').clear().type('1250000')    
              cy.get("input[id='joining date']").clear().type('10/28/2014')
              cy.get('#salary').click()
          
              cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type('05/22/2030')
              cy.get('#contact').type('8806805245')
              cy.get('#status').select('inactive')
          
              //Submitting Form
              cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
          
              //Validate successfully submitted 
              cy.get('.text-xl').should('have.text','Employee List')
        
              //wait 
              cy.wait(2000)
     
              //Delete the Employee Detail
              cy.get('.rounded-2xl').click()
        
              cy.wait(2000)  
              
              cy.get('.divide-y > tr > .text-gray-900').should('not.exist')

    })

  })



