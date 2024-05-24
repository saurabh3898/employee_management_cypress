
//import Employee from "./firstTestCase.cy"
//import Employee from "./firstTestCase.cy"

describe('Employee Management Test Case', () => {

    //const employee = new Employee
    
    beforeEach(() => {
      cy.visit('http://localhost:5173/') 
    })
  
    /*it('Add employee with valid data',()=>{
      
       employee.add('Saurabh Dhanawade', '08/03/1998', 1500000,'12/12/2023','12/12/2050',7066737409,'active')
  
    })*/
  
    it('Add a new employee with Invalid data types', () => {
  
      //Validating landed on right page 
      cy.get('.text-xl').should('have.text','Employee List')
  
      //Navigating to add employee
      cy.get('.inline-block').click()
      cy.get('.text-center').should('have.text','Add Employee')
  
      //Filling Form
      
      cy.get('#name').type(123)
      cy.get('#dob').clear().type('33-08-1998')
      cy.get('#salary').clear().type(780000)    
      cy.get("input[id='joining date']").clear().type('05/22/2024')
      cy.get('#salary').click()
  
      cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type('05/22/2046')
      cy.get('#contact').type('Viraj')
      cy.get('#status').select('active')
  
      //Submitting Form
      cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
  
      //Validate successfully submitted 
      cy.get('.text-xl').should('have.text','Employee List')
  
      cy.get('.divide-y > tr > .text-gray-900').should('have.text',123)
    })
  
  
    it('Add a new employee with Invalid and empty data ', () => {
      //Validating landed on right page 
      cy.get('.text-xl').should('have.text','Employee List')
  
      //Navigating to add employee
      cy.get("a[class='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
      cy.get('.text-center').should('have.text','Add Employee')
  
      //Filling Form
      cy.get('#name').type('Viraj')
      cy.get('#dob').clear().type('33-33-1998')
      cy.get('#salary').clear().type('Empty')    
      cy.get("input[id='joining date']").clear().type('22/22/2024')
      cy.get('#salary').click()
  
      cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type('05/22/2046')
      //cy.get('#contact').type('').click()
      cy.get('#status').select('active')
  
      //Submitting Form
      cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
     
      // Validation of Error Message
      cy.get('.mt-4.text-red-700').should('have.text','Please fill all fields.')
  
     
    })
  
  })