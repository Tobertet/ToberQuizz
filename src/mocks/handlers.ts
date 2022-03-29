import { rest } from "msw";
import { TESTING_CHALLENGE } from "./mocks";

export const handlers = [
  rest.get(
    "https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources/ES/1/challenge.json",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(TESTING_CHALLENGE));
    }
  ),
  rest.get(
    "https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources/ES/NaN/challenge.json",
    (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json({
          statusCode: "400",
          error: "Access Denied",
          message: "Access Denied",
        })
      );
    }
  ),
];
