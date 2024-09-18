import Button from "../../src/components/Button";

describe("Button Component", () => {
  it("should render with the correct background color when the color prop is passed", () => {
    cy.mount(<Button color="blue">Click Me</Button>);
    cy.get("button").should("have.css", "background-color", "rgb(0, 0, 255)");
  });
});

//? "describe" -> La función describe es proporcionada por el marco de pruebas (en este caso, Cypress con la
//? extensión cypress/react). Agrupa una serie de pruebas relacionadas bajo un título descriptivo. En
//? este caso, agrupa las pruebas relacionadas con el componente Button.

//? "it" -> La función it define una prueba específica dentro del bloque describe. El primer argumento 
//? es una cadena de texto que describe qué se espera que haga esta prueba. En este caso, se espera que 
//? el componente Button renderice con el color de fondo correcto cuando se pasa el prop color.

//? cy.mount es una función de Cypress (con @cypress/react) que monta el componente Button en un entorno
//? de pruebas para que pueda ser renderizado y probado. Aquí, el componente Button se monta con el prop 
//? color establecido en "blue" y el texto dentro del botón es "Click Me".
 
//? cy.get selecciona el elemento HTML que se va a verificar, en este caso, el botón renderizado. Luego, 
//? should es una aserción que verifica si el elemento cumple con una condición. Aquí, se está verificando 
//? si el botón tiene el estilo CSS de background-color establecido en "rgb(0, 0, 255)", que es el valor
//? RGB para el color azul.

//? cy.get().should('have.css') es útil para verificar estilos en componentes. Asegúrate de conocer los 
//? valores esperados en formato CSS (por ejemplo, RGB, HEX).