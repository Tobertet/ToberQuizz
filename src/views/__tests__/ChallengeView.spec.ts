import { render } from "@testing-library/vue";
import ChallengeView from "@/views/ChallengeView.vue";

jest.mock("vue-router", () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

describe("ChallengeView.vue", () => {
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
      push: jest.fn(),
    };
    const utils = render(ChallengeView, {
      global: {
        mocks: { $route: mockRoute, $router: mockRouter },
      },
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
        setup({ challengeIndex: 1000 });
        expect(window.location.pathname).toBe("/");
      });
    });
  });
});
