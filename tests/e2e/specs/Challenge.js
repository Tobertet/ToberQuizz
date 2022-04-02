describe("Challenge view", () => {
  it("shows the questions for that challenge", () => {
    cy.visit("#/ES/1");

    cy.get("#questions-table").find(".question").should("have.length", 3);
  });
  describe("when there are stored answers", () => {
    it("autocompletes the answered questions", () => {
      const storedValues = ["test answer 1", null, "whatever"];

      localStorage.setItem(
        "CapacitorStorage.ES_1",
        JSON.stringify(storedValues)
      );

      cy.visit("#/ES/1");

      cy.get(".question").each((item, index) => {
        cy.wrap(item)
          .find("input")
          .should("have.value", storedValues[index] || "");
      });
    });
  });
});
