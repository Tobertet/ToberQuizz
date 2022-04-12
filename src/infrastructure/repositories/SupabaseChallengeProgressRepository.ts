import { CountryCode } from "@/domain";
import { ChallengeProgressRepository } from "@/domain/repositories/ChallengeProgressRepository";
import { SupabaseClient } from "@supabase/supabase-js";

export class SupabaseChallengeProgressRepository
  implements ChallengeProgressRepository
{
  constructor(private readonly supabaseClient: SupabaseClient) {}

  async save(
    countryCode: CountryCode,
    challengeNumber: number,
    correctAnswersCount: number
  ): Promise<void> {
    await this.supabaseClient.from("correct_answers").insert(
      {
        country_code: countryCode,
        challenge_number: challengeNumber,
        correct_answers_count: correctAnswersCount,
      },
      { returning: "minimal" }
    );
  }
}
