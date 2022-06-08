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

Cypress.Commands.add("selectAProductYoutube", () => {
  cy.get("#firstName").type("Ana");
  cy.get("#lastName").type("Assis");
  cy.get("#email").type("ana@ana.com.br");
  cy.get("#product").select("YouTube").should("have.value", "youtube");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
});

Cypress.Commands.add("selectAProductMentoria", () => {
  cy.get("#product").select("mentoria").should("have.value", "mentoria");
});

Cypress.Commands.add("selectAProductBlog", () => {
  cy.get("#product").select(1).should("have.value", "blog");
});
