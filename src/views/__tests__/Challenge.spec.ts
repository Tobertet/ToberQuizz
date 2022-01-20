import { render } from "@testing-library/vue";
import Challenge from "@/views/Challenge.vue";

describe("Challenge.vue", () => {
  const setup = (routeParams?: Record<string, unknown>) => {
    const mockRoute = {
      params: {
        countryCode: "ES",
        challengeIndex: 0,
        ...routeParams,
      },
    };
    const mockRouter = {
      replace: jest.fn(),
    };
    const utils = render(Challenge, {
      global: { mocks: { $route: mockRoute, $router: mockRouter } },
    });
    return { ...utils, mockRouter, mockRoute };
  };

  describe("when the path does not match a challenge", () => {
    describe("when the country code is not found", () => {
      it("redirects to the home page", () => {
        const { mockRouter } = setup({ countryCode: ":)" });
        expect(mockRouter.replace).toHaveBeenCalledWith("/");
      });
    });
    describe("when the challenge index is not found", () => {
      it("redirects to the home page", () => {
        const { mockRouter } = setup({ challengeIndex: 1000 });
        expect(mockRouter.replace).toHaveBeenCalledWith("/");
      });
    });
  });
});
