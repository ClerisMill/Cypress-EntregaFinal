//Modifica todos los selectores para obtener los mismos elementos web pero con rutas diferentes

describe("Actividad complementaria2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria1', () =>{
    cy.visit('https://pushing-it.vercel.app');
    cy.contains('User').type('pushingit' + numero);
    cy.contains('Password').type('123456!');
    cy.get('[value="Female"]').check({force: true});

    cy.get('[name="day"]').select('3');
    cy.get('#month').select(4);
    cy.get('#year').select('1988');
    
    cy.get('[type="submit"]').click()
    });
   });