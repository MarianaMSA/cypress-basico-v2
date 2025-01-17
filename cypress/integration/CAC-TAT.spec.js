// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
  // .only é utilizado para realizar somente aquele teste
  it("Preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Mariana Maia Salvador de Assis, Mariana Maia Salvador de Assis, Mariana Maia Salvador de Assis, Mariana Maia Salvador de Assis, Mariana Maia Salvador de Assis, Mariana Maia Salvador de Assis!";
    cy.get("#firstName").type("Mariana", { delay: 0 });
    cy.get("#lastName").type("Maia Salvador de Assis", {
      delay: 0,
    });
    cy.get("#email").type("mariana@exemplo.com.br", {
      delay: 0,
    });
    cy.get("#open-text-area").type(longText, {
      delay: 0,
    });
    cy.get("button[type='submit']").click();

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao inserir emaiil com formatação invalida", () => {
    cy.get("#firstName").type("Ana", { delay: 0 });
    cy.get("#lastName").type("Maria da Silva", { delay: 0 });
    cy.get("#email").type("ana@.com", { delay: 0 });
    cy.get("#open-text-area").type("Teste");
    cy.get("button[type='submit']").click();
    cy.get(".error").should("be.visible");
  });

  it("campo telefone continua vazio quando preenchido com valores não numérivos", function () {
    cy.get("#phone").type("Aninha").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName").type("Ana", { delay: 0 });
    cy.get("#lastName").type("Maria da Silva", { delay: 0 });
    cy.get("#email").type("ana@exemplo.com", { delay: 0 });
    cy.get("#phone-checkbox").check();
    cy.get("#open-text-area").type("Teste");
    cy.get("button[type='submit']").click();
    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName")
      .type("Ana", { delay: 0 })
      .should("have.value", "Ana")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Maria da Silva", { delay: 0 })
      .should("have.value", "Maria da Silva", { delay: 0 });
    cy.get("#lastName").clear().should("have.value", "");
    cy.get("#email")
      .type("ana@exemplo.com", { delay: 0 })
      .should("have.value", "ana@exemplo.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone-checkbox").click();
    cy.get("#phone")
      .type("3131313131", { delay: 0 })
      .should("have.value", "3131313131")
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area").type("Teste");
    cy.get("button[type='submit']").click();
    cy.get(".error").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get("button[type='submit']").click();
    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit();

    cy.get(".success").should("be.visible");
  });

  it("testando o cy.contains", () => {
    cy.fillMandatoryFieldsAndSubmitContains();

    cy.get(".success").should("be.visible");
  });

  it("testanto o select", () => {
    cy.selectAProductYoutube();
    cy.get(".success").should("be.visible");
  });

  it("testando select 'Mentoria' ", () => {
    cy.selectAProductMentoria();
  });

  it("testando select 'Blog'", () => {
    cy.selectAProductBlog();
  });

  it("selecionando o radio 'Feedback'", () => {
    cy.selectARadioFeedback();
  });

  it("seleciona um radio por vez", () => {
    cy.selectAllRadios();
  });

  it("marcando Todos com a msm comando", () => {
    cy.allRadio();
  });

  it("marca ambos checkboxes, depois desmarca o último", () => {
    cy.checkBothCheckboxesThenUncheckTheLastOne();
  });

  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get("input[type='file']")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("seleciona um arquivo simulando um drag-and-drop", function () {
    cy.get("input[type='file']")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("sampleFile");
    cy.get("input[type='file']")
      .selectFile("@sampleFile")
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });
  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  it("testa a página da política de privavidade de forma independente", () => {
    cy.get("#privacy a").invoke("removeAttr", "target").click();
    cy.contains("HTML, CSS e JavaScript").should("be.visible");
  });
  it("testa a página da política de privavidade de forma independente", () => {
    cy.get("#privacy a").invoke("removeAttr", "target").click();
    cy.title().should(
      "be.equal",
      "Central de Atendimento ao Cliente TAT - Política de privacidade"
    );
    cy.contains("HTML, CSS e JavaScript").should("be.visible");
    cy.viewport("iphone-5");
  });
});
