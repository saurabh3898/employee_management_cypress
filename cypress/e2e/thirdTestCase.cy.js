describe('Test Cases', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/') 
    })
  
    it('Add a new employee with valid data and Edit the details after it', () => {
      //Validating landed on right page 
      cy.get('.text-xl').should('have.text','Employee List')
  
      //Navigating to add employee
      cy.get('.inline-block').click()
      cy.get('.text-center').should('have.text','Add Employee')
  
      //Filling Form
      cy.get('#name').type('Himanshu Surve')
      cy.get('#dob').clear().type('11-14-1998')
      cy.get('#salary').clear().type('50000')    
      cy.get("input[id='joining date']").clear().type('06/22/2020')
      cy.get('#salary').click()
  
      cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type('05/22/2046')
      cy.get('#contact').type('9420771485')
      cy.get('#status').select('inactive')
  
      //Submitting Form
      cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
  
      //Validate successfully submitted 
      cy.get('.text-xl').should('have.text','Employee List')
     
      //Click on the Edit Button
      cy.get(':nth-child(8) > .inline-block').click()

      //Edit the name of employee
      cy.get('#name').clear().type('Nikita Himanshu Surve')
    
       //Edit BirthDate of employee
       cy.get('#dob').clear().type('08-22-2000')
        
       //Edit the phone number
       cy.get('#contact').clear().type('8420781072')

       //Submitting Form after updation
      cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
  
      //Validate successfully submitted 
      cy.get('.text-xl').should('have.text','Employee List')

      cy.get('.divide-y > tr > .text-gray-900').should('contain','Nikita Himanshu Surve')

      

    })

  })