import { render, fireEvent, RenderOptions } from "@testing-library/vue";
import Question from "@/components/Question.vue";
import { CheckedAnswer } from "@/models";

describe("Question.vue", () => {
  const setup = (options?: RenderOptions) => {
    const utils = render(Question, {
      props: {
        question: {
          altText: "Testing question",
          solutions: [
            "6c11c637ac31ae0a59976acb163424dae5ff190d53ffe8183782f82eb0e54db4",
          ],
        },
        questionNumber: 20,
        challengeNumber: 100,
        countryCode: "CN",
        ...options?.props,
      },
    });
    const input = utils.getByRole("textbox") as HTMLInputElement;
    const button = utils.getByRole("button") as HTMLButtonElement;
    const img = utils.getByRole("img") as HTMLImageElement;
    return {
      input,
      button,
      img,
      ...utils,
    };
  };

  it("shows the question number", () => {
    const { getByText } = setup();

    expect(getByText("20 -")).toBeInTheDocument();
  });

  it("sets the image src to /resources/${countryCode}/${challengeNumber}/${questionNumber}.png", () => {
    const { img } = setup();

    expect(img.src).toBe("http://localhost/resources/CN/100/20.png");
  });

  it("sets the image alt text", () => {
    const { img } = setup();

    expect(img.alt).toBe("Testing question");
  });

  it("shows a gray border around the image", () => {
    const { getByTestId } = setup();

    expect(getByTestId("image-container")).toHaveClass("clean");
  });

  describe("when an answer has been typed and the button has been clicked", () => {
    it("emits an 'answer' event", () => {
      const { input, button, emitted } = setup();

      fireEvent.update(input, "whatever");
      fireEvent.click(button);

      expect(emitted().answer[0]).toBeTruthy();
    });

    it("emits an 'answer' event with the answer text and the question number", () => {
      const { input, button, emitted } = setup();

      fireEvent.update(input, "whatever");
      fireEvent.click(button);

      expect(emitted().answer[0]).toEqual(["whatever", 20]);
    });
  });

  describe("when there is a checked answer", () => {
    describe("when the answer is wrong", () => {
      it("shows a red border around the image", async () => {
        const checkedAnswer: CheckedAnswer = {
          text: "whatever",
          isValid: false,
        };
        const { findByTestId } = setup({ props: { checkedAnswer } });

        expect(await findByTestId("image-container")).toHaveClass("error");
      });
    });

    describe("when the answer is right", () => {
      const checkedAnswer: CheckedAnswer = { text: "whatever", isValid: true };

      it("shows a green border around the image", async () => {
        const { findByTestId } = setup({ props: { checkedAnswer } });

        expect(await findByTestId("image-container")).toHaveClass("valid");
      });

      it("disables the input", async () => {
        const { input, rerender } = setup({ props: { checkedAnswer } });

        await rerender({ checkedAnswer });

        expect(input).toBeDisabled();
      });

      it("disables the button", async () => {
        const { button, rerender } = setup({ props: { checkedAnswer } });

        await rerender({ checkedAnswer });

        expect(button).toBeDisabled();
      });
    });
  });
});
