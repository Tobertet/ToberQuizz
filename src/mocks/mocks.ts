import { CountryCode, EmptyChallenge } from "@/domain";

export const TESTING_CHALLENGE: EmptyChallenge = {
  countryCode: CountryCode.Spain,
  challengeNumber: 1,
  description: "Testing challenge.",
  questions: [
    {
      mediaResource: { mediaType: "image", uri: "" },
      solutions: [
        // "test answer 1"
        "2741bae4b700a47cc1fac049b85a691b06af9458cbf692d52efd2dc4884a191c",
      ],
    },
    {
      mediaResource: { mediaType: "image", uri: "" },
      solutions: [
        // "test answer 2"
        "268e2f223f7e8f46b5b8c25195db488cccc838aedbd6d72d068b82a5723b4ce8",
      ],
    },
    {
      mediaResource: { mediaType: "image", uri: "" },
      solutions: [
        // "test answer 3"
        "655dbab027f03415aa519892ff1ab3ee87ecaf0c4c126a361a62f2c77896a620",
      ],
    },
  ],
};
