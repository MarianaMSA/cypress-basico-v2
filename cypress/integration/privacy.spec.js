it.only("testa a página da política de privavidade de forma independente - W", () => {
  cy.visit("./src/privacy.html");
  cy.title().should(
    "be.equal",
    "Central de Atendimento a Cliente TAT - Política de privacidade"
  );
  cy.contains("HTML, CSS e JavaScript").should("be.visible");
});
