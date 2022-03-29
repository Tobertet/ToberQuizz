import { fireEvent, render } from "@testing-library/vue";
import Challenge from "@/components/Challenge.vue";

const timerValue = 20;

describe("Challenge.vue", () => {
  const setup = () => {
    const utils = render(Challenge, {
      props: {
        challengeNumber: 1,
        countryCode: "ES",
      },
    });
    return { ...utils };
  };
  it("renders the challenge heading with the challenge number", () => {
    const { getByText } = setup();
    expect(getByText(/Challenge 1/i)).toBeInTheDocument();
  });
  it("renders the challenge description", async () => {
    const { findByText } = setup();
    expect(await findByText(/^Testing challenge.*/)).toBeInTheDocument();
  });
  it("renders 0 as the number of valid answers", async () => {
    const { findByText } = setup();
    expect(await findByText(/0 \/ 3/)).toBeInTheDocument();
  });
  describe("when a question has been answered", () => {
    it("stores the answers", async () => {
      const saveItems = jest.spyOn(Storage.prototype, "setItem");
      const { findAllByRole } = setup();
      const input = (await findAllByRole("textbox"))[0] as HTMLInputElement;
      const button = (await findAllByRole("button"))[0] as HTMLButtonElement;

      await fireEvent.update(input, "whatever");
      await fireEvent.click(button);
      // How could I wait for the answer to be there?
      await new Promise((r) => setTimeout(r, timerValue));

      expect(saveItems).toHaveBeenCalledWith(
        "CapacitorStorage.ES_1",
        '["whatever"]'
      );
    });
    it("adds the status as a class to the question", async () => {
      const { findAllByTestId, findAllByRole } = setup();
      const input = (await findAllByRole("textbox"))[0] as HTMLInputElement;
      const button = (await findAllByRole("button"))[0] as HTMLButtonElement;

      await fireEvent.update(input, "whatever");
      await fireEvent.click(button);
      // How could I wait for the answer to be there?
      await new Promise((r) => setTimeout(r, timerValue));

      expect((await findAllByTestId("image-container"))[0]).toHaveClass(
        "error"
      );
    });
    it("updates the number of valid answers if it was right", () => {
      // Can't test this until I add a test challenge or people could see the answer.
    });
  });
  describe("when there are stored answers", () => {
    beforeAll(() => {
      localStorage.setItem(
        "CapacitorStorage.ES_1",
        '["test", null, "anotherTest"]'
      );
    });
    it("displays the stored answers in the inputs", async () => {
      const { findAllByRole } = setup();
      const answerInputElements = await findAllByRole("textbox");
      // I should add a loading and waitFor the loading to dissappear
      await new Promise((r) => setTimeout(r, timerValue));
      expect(answerInputElements[0]).toHaveValue("test");
      expect(answerInputElements[2]).toHaveValue("anotherTest");
    });
    it("does not display the stored null answers in the inputs", async () => {
      const { findAllByRole } = setup();
      const answerInputElements = await findAllByRole("textbox");
      // I should add a loading and waitFor the loading to dissappear
      await new Promise((r) => setTimeout(r, timerValue));
      expect(answerInputElements[1]).toHaveValue("");
    });
    it("adds the status as a class to the answered questions", async () => {
      const { findAllByTestId } = setup();
      const imageContainers = await findAllByTestId("image-container");
      // I should add a loading and waitFor the loading to dissappear
      await new Promise((r) => setTimeout(r, timerValue));
      expect(imageContainers[0]).toHaveClass("error");
      expect(imageContainers[2]).toHaveClass("error");
    });
    it("updates the number of valid answers if it was right", () => {
      // Can't test this until I add a test challenge or people could see the answer.
    });
  });
});
