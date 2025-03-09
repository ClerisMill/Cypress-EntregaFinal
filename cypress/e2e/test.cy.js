describe("Entrega Final", () => {
let data
const baseAPIUrl =  'https://pushing-it-3.onrender.com'
before("Before",() =>{
cy.fixture('desafio2').then(datos =>{
    data=datos;
     cy.request({
        method: "POST",
        url: `${baseAPIUrl}/api/register`, 
        body: {
          "username": "Cleris",
          "password": "Mill",
          "gender": "Female",
          "day": "19",
          "month": "March",
          "year": "1989",
          "respuesta": 200
        }
      }); 
});

})

beforeEach("Before Each", () => {
    cy.visit('');
    cy.request({
        method:"POST",
        url:`${baseAPIUrl}/api/login`,
        body:{
            username : "Cleris",
            password: "Mill",
            respuesta: 200

        }
        })
    
    
  
})

after("Elimiación de Usuario",() =>{
    cy.request({
         method: "DELETE",
         url:`${baseAPIUrl}/api/deleteuser/Cleris`,
         respuesta: 200
     })
 })
it('¿Se registro?',()=>{

    cy.log("SI SE PUDO REGISTRAR Y LOGUEARSE!")
})



})