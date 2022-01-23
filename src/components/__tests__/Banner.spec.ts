import { render } from "@testing-library/vue";
import Banner from "@/components/Banner.vue";
import { fireEvent } from "@testing-library/dom";

describe("Banner.vue", () => {
  const setup = () => {
    const mockRouter = {
      push: jest.fn(),
    };
    const utils = render(Banner, {
      global: { mocks: { $router: mockRouter } },
    });
    const title = utils.getByTestId("banner-title");
    return { ...utils, mockRouter, title };
  };

  describe("when the banner is clicked", () => {
    it("navigates to /", () => {
      const { mockRouter, title } = setup();
      fireEvent.click(title);
      expect(mockRouter.push).toHaveBeenCalledWith("/");
    });
  });
});
