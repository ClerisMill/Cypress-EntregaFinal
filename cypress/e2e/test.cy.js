import { OnlineShop} from "../support/pages/OnlineShop";
describe("Entrega Final", () => {
let data
const baseAPIUrl =  'https://pushing-it-3.onrender.com'
const token= window.localStorage.getItem('token');
const onlineShop = new OnlineShop;

before("Before",() =>{
cy.fixture('desafio2').then(datos =>{
    data=datos;
   /*   cy.request({
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
      });  */
});

})

beforeEach("Before Each", () => {
     
    cy.request({
        method:"POST",
        url:`${baseAPIUrl}/api/login`,
        body:{
            username : "Cleris",
            password: "Mill",
            respuesta: 200

        }
        }).then(response =>{

            window.localStorage.setItem("token", response.body.token);
            window.localStorage.setItem("username", response.body.username);

    
        cy.visit('');
       
    })
    
  
})

/* after("Elimiación de Usuario",() =>{
    cy.request({
         method: "DELETE",
         url:`${baseAPIUrl}/api/deleteuser/Cleris`,
         respuesta: 200
     }) 
 })*/
 it('OnlineShop',()=>{
    cy.log('Deberia entrar a Home')
    onlineShop.clickOnlineshop();
    
   cy.wait(3000);
}) 




})