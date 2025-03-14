import { OnlineShop} from "../support/pages/OnlineShop";
import { ProductPage } from "../support/pages/productPage";
import { ShoppingCart } from "../support/pages/shoppingCart";
import { CheckOutPage } from "../support/pages/checkoutPage";
import { TotalPrice } from "../support/pages/totalPrice";
describe("Entrega Final", () => {
let data
const baseAPIUrl =  'https://pushing-it-3.onrender.com'
const token= window.localStorage.getItem('token');
const onlineShop = new OnlineShop;
const productPage = new ProductPage;
const shoppingCart = new ShoppingCart;
const checkOutPage = new CheckOutPage;
const totalPrice = new TotalPrice;

before("Before",() =>{
cy.fixture('productos').then(datos =>{
    data=datos;
      cy.request({
        method: "POST",
        url: `${baseAPIUrl}/api/register`, 
        body: {
          "username": "Cleris",
          "password": "123456",
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
     
    cy.request({
        method:"POST",
        url:`${baseAPIUrl}/api/login`,
        body:{
            username : "Cleris",
            password: "123456",
            respuesta: 200

        }
        }).then(response =>{

            window.localStorage.setItem("token", response.body.token);
            window.localStorage.setItem("username", response.body.username);

    
        cy.visit('');
       
    })
    
  
})

after("Elimiación de Usuario",() =>{
    cy.request({
         method: "DELETE",
         url:`${baseAPIUrl}/api/deleteuser/Cleris`,
         respuesta: 200
     }) 
 })
 it('OnlineShop',()=>{
    cy.log('Deberia entrar a Home')
    onlineShop.clickOnlineshop();
    
 

    productPage.agregarProducto(data.producto1.name);
    productPage.agregarProducto(data.producto2.name);
    productPage.goToShoppingCart();
    
    cy.wait(1000);
    //cy.contains('p', data.producto2.name).siblings('[data-cy="unitPrice"]').should('have.text', `$${data.producto2.unitPrice}`)

    shoppingCart.verifyProductPrice(data.producto1);
    shoppingCart.verifyProductPrice(data.producto2);

    shoppingCart.clickShowTotalPriceButon();

    //cy.contains('p',producto.name).siblings(this.totalPrice)

    
    
        let total = 0;
        cy.get('li').each((item) => {
            cy.wrap(item).find('#unitPrice').then((producto) => {
              cy.wrap(producto).invoke('text').then((precio) => {
                cy.log(precio); // Muestra el texto del precio

                total = Number(precio);
                cy.log(total);
                
              });
            });
          });
    


            shoppingCart.clickOnBillingSummaryButon();
            cy.wait(1000);

            shoppingCart.clickGoToChechoutButton();
            cy.wait(1000);

            checkOutPage.escribirNombre(data.buyer.name);
            checkOutPage.escribirApellido(data.buyer.Lastname);
            checkOutPage.escribirCardNumber(data.buyer.creditCard);
            checkOutPage.clickPurchaseButon();
            cy.wait(1000);

            cy.get('[id= "chakra-modal--header-\:r6u\:"]').should('have.text', data.mensajes.mensaje),
            cy.get('#name').should('have.text', `${data.buyer.name} ${data.buyer.Lastname} ${data.mensajes.mensaje1}`);
            cy.get('#product-1').should('have.text', `${data.producto1.quantity} x ${data.producto1.name}`)
            cy.get('#product-2').should('have.text', `${data.producto2.quantity} x ${data.producto2.name}`);
            cy.get('#creditCard').should('have.text', `${data.buyer.creditCard}`);
            cy.get('#totalPrice').should('contain', `Monney spent $${data.producto1.unitPrice + data.producto2.unitPrice}`);
            
              
            


   

    

    







      
})
})
