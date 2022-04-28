describe("Home view", () => {
  it("contains the ES and WW categories", () => {
    cy.visit("/");
    cy.contains("Spain (Spanish)");
    cy.contains("International (English)");
  });
  describe("when a category is clicked", () => {
    it("navigates to the country challenges", () => {
      cy.visit("/");

      cy.contains("International (English)").click();

      cy.url().should("include", "/WW");
    });
  });
});
