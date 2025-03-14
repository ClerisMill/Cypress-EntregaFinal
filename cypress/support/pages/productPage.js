export class ProductPage {

    constructor() {
        this.closeModalButton = '[id=closeModal]',
        this.shoppingCartBotton= '[data-cy= goShoppingCart]'
    }

    agregarProducto(producto){
        cy.get('[data-cy="search-bar"]').clear().type(`${producto} {enter}`)
        cy.get(`[name="${producto}"]`).click();
        //cy.get(`[name="${producto}"]`).eq(1).click({ force: true });
        cy.get(this.closeModalButton).click();
    };

    goToShoppingCart(){
        cy.get(this.shoppingCartBotton).click();
        
    }


    
}