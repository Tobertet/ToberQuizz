describe("Challenge list view", () => {
  it("contains the challenges for that country", () => {
    cy.visit("#/WW");
    cy.contains("Challenge 1");
    cy.contains("Challenge 2");
    cy.contains("Challenge 3");
  });
  describe("when the selected country is Spain", () => {
    it("sets the language to Spanish", () => {
      cy.visit("#/ES");
      cy.contains("Desafío 1");
      cy.contains("Desafío 2");
      cy.contains("Desafío 3");
    });
  });
  describe("when the country code does not exist", () => {
    it("redirects to the Home view", () => {
      cy.visit("#/PE");
      cy.url().should("match", /\/#\/$/);
    });
  });
  describe("when the country code is in lower case", () => {
    it("changes it to upper case", () => {
      cy.visit("#/ww");
      cy.url().should("match", /\/#\/WW$/);
    });
  });
  describe("when a challenge is clicked", () => {
    it("navigates to the challenge page", () => {
      cy.visit("#/WW");

      cy.contains("Challenge 2").click();

      cy.url().should("include", "/WW/2");
    });
  });
  describe("when 'Why ToberQuizz?' is clicked", () => {
    it("navigates to the ToberQuizz page in Robert's website", () => {
      cy.visit("#/WW");

      cy.contains("Why ToberQuizz?")
        .should("have.attr", "target")
        .and("eq", "_blank");

      cy.contains("Why ToberQuizz?")
        .should("have.attr", "href")
        .and("eq", "https://robertmengual.com/projects;project=toberquizz");
    });
  });
  describe("when the country code is changed in the url", () => {
    beforeEach(() => {
      cy.visit("#/WW");
    });
    describe("when it does not exist", () => {
      it("redirects to the Home view", () => {
        cy.visit("#/PE");
        cy.url().should("match", /\/#\/$/);
      });
    });
    describe("when the country code is in lower case", () => {
      it("changes it to upper case", () => {
        cy.visit("#/ww");
        cy.url().should("match", /\/#\/WW$/);
      });
    });
    describe("when the country code exists", () => {
      it("shows its content", () => {
        cy.visit("#/ES");
        cy.contains("Desafío 1");
        cy.contains("Desafío 2");
        cy.contains("Desafío 3");
      });
    });
  });
});
