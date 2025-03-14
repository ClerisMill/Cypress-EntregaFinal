export class CheckOutPage{


    constructor(){
        this.inputnombre = '[id="FirstName"]'; 
        this.inputApellido= '[id="lastName"]';
        this.inputTarjeta= '[id="cardNumber"]';
        this.botonPurchase= '[data-cy=purchase]';

    };



escribirNombre(nombre){
    cy.get(this.inputnombre).type(nombre);
};


escribirApellido(apellido){
    cy.get(this.inputApellido).type(apellido);
}


escribirCardNumber(tarjeta){
    cy.get(this.inputTarjeta).type(tarjeta);
}

clickPurchaseButon(){
    cy.get(this.botonPurchase).click();

}
}