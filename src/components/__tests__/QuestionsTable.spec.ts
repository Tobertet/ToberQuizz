import {
  render,
  fireEvent,
  RenderOptions,
  getByTestId,
} from "@testing-library/vue";
import QuestionsTable from "@/components/QuestionsTable.vue";
import { QUIZZ_DATA } from "@/quizzData";

describe("QuestionsTable.vue", () => {
  const setup = () => {
    const utils = render(QuestionsTable, {
      props: {
        challengeNumber: 1,
        countryCode: "ES",
        challenge: QUIZZ_DATA.ES[0],
        checkedAnswers: [],
      },
    });
    const [firstSelect, secondSelect] = utils.getAllByRole("combobox");
    return { ...utils, firstSelect, secondSelect };
  };
  it("shows the challenge questions", () => {
    const { getAllByRole } = setup();
    expect(getAllByRole("textbox")).toHaveLength(30);
  });
  describe("when the viewport is < 992 px", () => {
    beforeAll(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 400,
      });
    });
    it("allows to select 1 or 2 columns per row", () => {
      const { getAllByRole } = setup();
      const selectOptions = getAllByRole("option");

      expect(selectOptions[0]).toHaveValue("1");
      expect(selectOptions[1]).toHaveValue("2");
    });
  });
  describe("when the viewport is > 992 px", () => {
    beforeAll(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1000,
      });
    });
    it("allows to select from 4 to 6 columns per row", () => {
      const { getAllByRole } = setup();
      const selectOptions = getAllByRole("option");

      expect(selectOptions[1]).toHaveValue("4");
      expect(selectOptions[2]).toHaveValue("5");
      expect(selectOptions[3]).toHaveValue("6");
    });
  });
  describe("when 5 columns per row has been selected", () => {
    it("applies the style to the grid", async () => {
      const { firstSelect, getByTestId } = setup();
      await fireEvent.update(firstSelect, "5");
      expect(getByTestId("questions-table")).toHaveStyle(
        "grid-template-columns: repeat(5, 1fr)"
      );
    });
    it("changes the value of the other select component", async () => {
      const { firstSelect, secondSelect } = setup();
      await fireEvent.update(firstSelect, "5");
      expect(secondSelect).toHaveValue("5");
    });
  });
});
