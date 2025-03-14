export class ShoppingCart{

    constructor(){
        this.showTotalPriceButon = '.chakra-button.css-1i1ynt3';
        this.totalPrice = '[id=unitPrice]';
        this.goToBillingSummary= '[id= goBillingSummary]';
        this.goToCheckout = '[id=goCheckout]';

    };

    clickShowTotalPriceButon(){
        cy.get(this.showTotalPriceButon).click()
    }

    verifyProductPrice(producto) {// le pasamoos parametro el objeto del fixture. le puse todos los productos
        cy.contains('p',producto.name)  // Buscar el nombre de la pilcha en el DOM. para acceder al nombre de 1 producto
            .siblings(this.totalPrice)      // Encontramos el precio relacionado porque es el hermano
            .should('have.text', `$${producto.unitPrice}`);  // Verificamos el precio, le ponemos $ para que el texto ese igual
    }


        clickOnBillingSummaryButon (){
            cy.get(this.goToBillingSummary).click();
        }

        clickGoToChechoutButton(){
            cy.get(this.goToCheckout).click();
        }

/*     getPrices(){
        let total = 0;
        cy.get('li').each((item) => {
            cy.wrap(item).find('#unitPrice').then((producto) => {
              cy.wrap(producto).invoke('text').then((text) => {
                cy.log(text); // Muestra el texto del precio

                total = Number(text);
                cy.log(total);
                
              });
            });
          });
    } */

    

}