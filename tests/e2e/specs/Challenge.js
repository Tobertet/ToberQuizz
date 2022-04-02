describe("Challenge view", () => {
  afterEach(() => {
    localStorage.clear();
  });
  it("shows the questions for that challenge", () => {
    cy.visit("#/ES/1");

    cy.get("#questions-table").find(".question").should("have.length", 3);
  });
  describe("when nobody has completed the challenge", () => {
    it("shows a taunting message", () => {
      cy.visit("#/ES/1");
      cy.contains("This challenge has not been completed by anybody yet!");
    });
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
  describe("when a question is answered", () => {
    describe("when it is wrong", () => {
      it("adds a red border around the question image", () => {
        cy.visit("#/ES/1");

        cy.get(".question input").first().type("whatever");
        cy.get(".question button").first().click();

        cy.get(".image-container").first().should("have.class", "error");
      });
    });
    describe("when it is correct", () => {
      it("adds a green border around the question image", () => {
        cy.visit("#/ES/1");

        cy.get(".question input").first().type("test answer 1");
        cy.get(".question button").first().click();

        cy.get(".image-container").first().should("have.class", "valid");
      });
    });
  });
});
