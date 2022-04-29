describe("Challenge Statistics view", () => {
  afterEach(() => {
    localStorage.clear();
  });
  it("shows a bar-chart canvas", () => {
    cy.viewport("iphone-8");
    cy.visit("#/stats/WW/1");
    cy.get("#bar-chart").should("exist");
  });
  describe("when statistics are allowed", () => {
    it("does not show an opt-in box", () => {
      localStorage.setItem(
        "CapacitorStorage.STATISTICS_OPT_IN",
        JSON.stringify(true)
      );
      cy.viewport("iphone-8");
      cy.visit("#/stats/WW/1");
      cy.contains("Contribute").should("not.exist");
    });
  });
  describe("when statistics are not allowed", () => {
    it("shows an opt-in box", () => {
      localStorage.setItem(
        "CapacitorStorage.STATISTICS_OPT_IN",
        JSON.stringify(false)
      );
      cy.viewport("iphone-8");
      cy.visit("#/stats/WW/1");
      cy.contains("Contribute").should("exist");
    });
    describe("when the opt-in is clicked", () => {
      it("removes the opt-in box", () => {
        localStorage.setItem(
          "CapacitorStorage.STATISTICS_OPT_IN",
          JSON.stringify(false)
        );
        cy.viewport("iphone-8");
        cy.visit("#/stats/WW/1");

        cy.contains("Contribute").click();
        cy.contains("Contribute").should("not.exist");
      });
    });
  });
});
