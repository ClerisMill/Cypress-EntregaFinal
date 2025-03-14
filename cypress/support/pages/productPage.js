export class ProductPage {

    constructor() {
        this.closeModalButton = '[id=closeModal]'
    }

    agregarProducto(producto){
        cy.get('[data-cy="search-bar"]').clear().type(`${producto} {enter}`)
        cy.get(`[name= "${producto}"]`).click({ multiple: true, force: true});
        cy.get(this.closeModalButton).click();
    };
}