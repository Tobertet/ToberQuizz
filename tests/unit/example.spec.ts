import { render } from "@testing-library/vue";
import Question from "@/components/Question.vue";

describe("Question.vue", () => {
  it("renders props.msg when passed", () => {
    // The render method returns a collection of utilities to query your component.
    const { getByText } = render(Question);
    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    // getByText("Times clicked: 0");
  });
});
