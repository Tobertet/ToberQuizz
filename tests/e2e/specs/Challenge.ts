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
      it("does not send a statistics event to the server", () => {
        cy.intercept({
          method: "POST",
          url: "/rest/v1/correct_answers*",
        }).as("sendStatisticsEvent");

        cy.visit("#/ES/1");

        cy.get(".question input").first().type("wrong answer");
        cy.get(".question button").first().click();

        cy.wait(100);

        cy.get("@sendStatisticsEvent")
          .its("request.body")
          .should("equal", null);
      });
    });
    describe("when it is correct", () => {
      it("adds a green border around the question image", () => {
        cy.visit("#/ES/1");

        cy.get(".question input").first().type("test answer 1");
        cy.get(".question button").first().click();

        cy.get(".image-container").first().should("have.class", "valid");
      });
      it("adds one to the correct answers count", () => {
        cy.visit("#/ES/1");

        cy.contains("0 / 3");

        cy.get(".question input").first().type("test answer 1");
        cy.get(".question button").first().click();

        cy.contains("1 / 3");
      });
      describe("when statistics are not allowed", () => {
        it("does not send a statistics event to the server", () => {
          cy.intercept({
            method: "POST",
            url: "/rest/v1/correct_answers*",
          }).as("sendStatisticsEvent");

          cy.visit("#/ES/1");

          cy.get(".question input").first().type("test answer 1");
          cy.get(".question button").first().click();

          cy.wait(100);

          cy.get("@sendStatisticsEvent")
            .its("request.body")
            .should("equal", null);
        });
        // TODO this should be in the ChallengeStatistics under the Allows the user to allow data collection
        describe("when the user opts in", () => {
          it("sends the stored events", () => {
            // TODO
          });
        });
      });
    }),
      describe("when statistics are allowed", () => {
        it("sends a statistics event to the server", () => {
          cy.intercept({
            method: "POST",
            url: "/rest/v1/correct_answers*",
          }).as("sendStatisticsEvent");

          cy.visit("#/ES/1");

          cy.get(".question input").first().type("test answer 1");
          cy.get(".question button").first().click();

          cy.wait(["@sendStatisticsEvent"]);

          cy.get("@sendStatisticsEvent")
            .its("request.body")
            .should("deep.equal", [
              {
                country_code: "ES",
                challenge_number: 1,
                correct_answers_count: 1,
              },
            ]);
        });
        describe("when the statistics event could not be sent", () => {
          it("is sent with the next correct answer", () => {
            cy.intercept("POST", "/rest/v1/correct_answers*", {
              forceNetworkError: true,
            }).as("sendStatisticsEvent");

            cy.visit("#/ES/1");

            cy.get(".question input").first().type("test answer 1");
            cy.get(".question button").first().click();

            cy.wait(["@sendStatisticsEvent"]);

            cy.get(".question input").last().type("test answer 3");
            cy.get(".question button").last().click();

            cy.wait(["@sendStatisticsEvent"]);

            cy.get("@sendStatisticsEvent")
              .its("request.body")
              .should("deep.equal", [
                {
                  country_code: "ES",
                  challenge_number: 1,
                  correct_answers_count: 1,
                },
                {
                  country_code: "ES",
                  challenge_number: 1,
                  correct_answers_count: 2,
                },
              ]);
          });
        });
      });
  });
});
