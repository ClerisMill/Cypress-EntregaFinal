describe("Desafìo 1", () => {
    const numRandom = Math.ceil(Math.random()*10000);


    it("Resgistrarse a pushing.it", () =>{
        cy.visit('');
        cy.get('#user').type('pushingit' + numRandom);
        cy.get('#pass').type('123456!');
        cy.get('[value="Female"]').check({force:true});
        cy.get('[name="day"]').select(18);
        cy.get('[name="month"]').select("March");
        cy.get('[name="year"]').select("1989");
        cy.get('button[type= "submit"]').click()


        cy.get("#todolistlink").click();
        cy.get('#task').type("Estudiar");
        cy.get('#sendTask').click();
        cy.contains("Estudiar").click()
        
    })

   


})