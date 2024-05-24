describe('Test Cases', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/') 
    })
  
    it('Validation all employee list', () => {


// 1. Employee with Valid data


      //Validating landed on right page 
      cy.get('.text-xl').should('have.text','Employee List')
  
      //Navigating to add employee
      cy.get('.inline-block').click()
      cy.get('.text-center').should('have.text','Add Employee')
  
      //Filling Form
      cy.get('#name').type('Saurabh Dhanawade')
      cy.get('#dob').clear().type('08-03-1998')
      cy.get('#salary').clear().type('1500000')    
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

       
  // 2. Edit the details of existing employee


        //Validating landed on right page 
        cy.get('.text-xl').should('have.text','Employee List')
    
        //Navigating to add employee
        cy.get("a[class='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
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
        cy.get(':nth-child(2) > :nth-child(8) > .inline-block').click()
  
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

        cy.get(':nth-child(2) > .text-gray-900').should('contain','Nikita')
  

        //Validating landed on right page 
         cy.get('.text-xl').should('have.text','Employee List')
  


   // 3. Delete the record of Existing Employee   
    
    
          //Navigating to add employee
           cy.get("a[class='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
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
         cy.get(':nth-child(3) > :nth-child(9) > .rounded-2xl').click()
   
         cy.wait(2000)

         cy.get(':nth-child(3) > .text-gray-900').should('not.exist')

   
// 4. Changing the Status of an Employee

    
        //Validating landed on right page 
        cy.get('.text-xl').should('have.text','Employee List')
    
        //Navigating to add employee
        cy.get("a[class='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
        cy.get('.text-center').should('have.text','Add Employee')
    
        //Filling Form
        cy.get('#name').type('Aditya Pawar')
        cy.get('#dob').clear().type('12-12-2002')
        cy.get('#salary').clear().type('450000')    
        cy.get("input[id='joining date']").clear().type('09/22/2022')
        cy.get('#salary').click()
    
        cy.get("input[class='mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm']").eq(2).clear().type('05/22/2046')
        cy.get('#contact').type('9420457812')
        cy.get('#status').select('active')
    
        //Submitting Form
        cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
    
        //Validate successfully submitted 
        cy.get('.text-xl').should('have.text','Employee List')
  
        //Click on Edit 
        cy.get(':nth-child(3) > :nth-child(8) > .inline-block').click()
  
        //click on Status
        cy.get('#status').select([])
  
        cy.get('#status').select('inactive')
  
        //Submitting Form
        cy.get("button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']").click()
    
        //Validate successfully submitted 
        cy.get('.text-xl').should('have.text','Employee List')
  
        //validate the status of the employee
        cy.get(':nth-child(3) > :nth-child(7)').should('have.text','inactive')
  

  //5. Final Vadlidation of Employee List

        cy.get('.divide-y > :nth-child(1) > .text-gray-900').should('contain','Saurabh')
        cy.get(':nth-child(2) > .text-gray-900').should('contain','Nikita')
        //cy.get(':nth-child(3) > .text-gray-900').should('contain','Viraj')
        cy.get(':nth-child(3) > .text-gray-900').should('contain','Aditya')
  
      })

  })