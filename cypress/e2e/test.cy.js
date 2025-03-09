describe("Desafio 2", () => {
let data

before("Before",() =>{
cy.fixture('desafio2').then(datos =>{
    data=datos;
});

})

beforeEach("Before Each",() =>{
cy.visit('');
cy.get('#registertoggle').dblclick();
cy.get('#user').type(Cypress.env().usuario);
cy.get('#pass').type(Cypress.env().contraseña);
cy.get('#submitForm').click();
cy.contains('To Do List', {timeout:30000}).click();

})


it('Agregar Las 5 Tareas desde un set de datos',() => {
cy.get('#task').type(data.tareas.tarea1);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea1)

cy.get('#task').type(data.tareas.tarea2);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea2)

cy.get('#task').type(data.tareas.tarea3);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea3)

cy.get('#task').type(data.tareas.tarea4);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea4)
cy.get('#task').type(data.tareas.tarea5);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea5)
})

it('Verificar que existan los botones All, Completed, Active y Remove All', () =>{
    cy.get('#sendTask').should("have.text", "Send");
    cy.get('#all').should("have.text", "All");
    cy.get('#completed').should("have.text", "Completed");
    cy.get('#active').should("have.text", "Active");
    cy.get('#removeAll').should("have.text", "Remove all");
})

it('Agregar 2 tareas, completarlas y eliminar la segunda tarea completada',() =>{

cy.get('#task').type(data.tareas.tarea6);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea6).click();
cy.get('#task').type(data.tareas.tarea7);
cy.get('#sendTask').click();
cy.contains('p',data.tareas.tarea7).click();
cy.contains('p', data.tareas.tarea7).siblings('[type=button]').click();
});

it.only('Agregar 2 tareas y eliminar a primera tarea', ()=>{
    cy.get('#task').type(data.tareas.tarea8);
    cy.get('#sendTask').click();
    cy.get('#task').type(data.tareas.tarea9);
    cy.get('#sendTask').click();
    cy.contains('p', data.tareas.tarea8).siblings('[type=button]').click();
    cy.wait(3000);

})

})