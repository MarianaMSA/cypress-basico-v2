Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get("#firstName").type("Mariana", { delay: 0 });
  cy.get("#lastName").type("Maia Salvador de Assis", {
    delay: 0,
  });
  cy.get("#email").type("mariana@exemplo.com.br", {
    delay: 0,
  });
  cy.get("#open-text-area").type("teste", {
    delay: 0,
  });
  cy.get("button[type='submit']").click();
});

Cypress.Commands.add("fillMandatoryFieldsAndSubmitContains", () => {
  cy.get("#firstName").type("Mariana", { delay: 0 });
  cy.get("#lastName").type("Maia Salvador de Assis", {
    delay: 0,
  });
  cy.get("#email").type("mariana@exemplo.com.br", {
    delay: 0,
  });
  cy.get("#open-text-area").type("teste", {
    delay: 0,
  });
  cy.contains("button", "Enviar").click();
});
