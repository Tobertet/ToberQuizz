describe("Challenge list view", () => {
  it("contains the challenges for that country", () => {
    cy.visit("#/ES");
    cy.contains("Challenge 1");
    cy.contains("Challenge 2");
    cy.contains("Challenge 3");
  });
  describe("when a challenge is clicked", () => {
    it("navigates to the challenge page", () => {
      cy.visit("#/ES");

      cy.contains("Challenge 2").click();

      cy.url().should("include", "/ES/2");
    });
  });
  describe("when 'Why ToberQuizz?' is clicked", () => {
    it("navigates to the ToberQuizz page in Robert's website", () => {
      cy.visit("#/ES");

      cy.contains("Why ToberQuizz?")
        .should("have.attr", "target")
        .and("eq", "_blank");

      cy.contains("Why ToberQuizz?")
        .should("have.attr", "href")
        .and("eq", "https://robertmengual.com/projects;project=toberquizz");
    });
  });
});
