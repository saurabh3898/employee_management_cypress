

describe('Employee Managemnet Test Case', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 

    //Validating landed on right page 
    cy.get('.text-xl').should('have.text','Employee List')
  })

  /*class Employee{
        add(username, dob, salary, joiningdate, relievingdate,contact,status){
               
    //Navigating to add employee
    
    cy.get('#name').type(username)
    cy.get('#dob').clear().type(dob)
    cy.get('#salary').clear().type(salary)    
    cy.get("input[id='joining date']").clear().type(joiningdate)
    //cy.get('#salary').click()

    cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type(relievingdate)
    cy.get('#contact').type(contact)
    cy.get('#status').select(status)

    //Submitting Form
    cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()

        }
      

  }*/

    

    it('Add a new employee with valid data', () => {
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
    
    cy.get('.divide-y > tr > .text-gray-900').should('contain','Saurabh Dhanawade')

  })

 /* Cypress.Commands.add('addEmployee', (username, dob, salary, joiningdate, relievingdate,contact,status) => {
  
    //Navigating to add employee
    
    cy.get('#name').type(username)
    cy.get('#dob').clear().type(dob)
    cy.get('#salary').clear().type(salary)    
    cy.get("input[id='joining date']").clear().type(joiningdate)
    //cy.get('#salary').click()

    cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type(relievingdate)
    cy.get('#contact').type(contact)
    cy.get('#status').select(status)

    //Submitting Form
    cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()

    
  })*/


})

