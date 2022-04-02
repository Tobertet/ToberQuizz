describe("Challenge view", () => {
  it("shows the questions for that challenge", () => {
    cy.visit("#/ES/1");

    cy.get("#questions-table").find(".question").should("have.length", 3);
  });
});
