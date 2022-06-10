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
  cy.get("#firstName").type("Ana", { delay: 0 });
  cy.get("#lastName").type("Assis", { delay: 0 });
  cy.get("#email").type("ana@ana.com.br", { delay: 0 });
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

Cypress.Commands.add("selectARadioFeedback", () => {
  cy.get("input[type='radio'][value='feedback']")
    .check()
    .should("have.value", "feedback");
});

Cypress.Commands.add("selectAllRadios", () => {
  cy.get("input[type='radio'][value='ajuda']").check().should("be.checked");
  cy.get("input[type='radio'][value='elogio']").check().should("be.checked");
  cy.get("input[type='radio'][value='feedback']").check().should("be.checked");
});

Cypress.Commands.add("allRadio", () => {
  cy.get("input[type='radio']")
    .should("have.length", 3)
    .each(($radio) => {
      cy.wrap($radio).check();
      cy.wrap($radio).should("be.checked");
    });
});

Cypress.Commands.add("checkBothCheckboxesThenUncheckTheLastOne", () => {
  cy.get("input[type='checkbox']")
    .check()
    .should("be.checked")
    .last()
    .uncheck()
    .should("not.be.checked");
});

// Cypress.Commands.add("uploadFile", () => {
//   cy.get("input[type='file']")
//     .should("not.have.value")
//     .selectFile("cypress/fixtures/example.json")
//     .should(($input) => {
//       expect(input[0].files[0].name.to.equal("example.json"));
//     });
// });
