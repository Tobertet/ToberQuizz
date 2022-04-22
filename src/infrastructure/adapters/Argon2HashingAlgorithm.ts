import { HashingAlgorithm } from "@/application/ports";
import { Challenge, Question } from "@/domain";
import argon2 from "argon2-browser";

export class Argon2HashingAlgorithm implements HashingAlgorithm {
  private static readonly SALT = "Tobertet";
  private static readonly HASH_LENGTH = 32;
  private static readonly TYPE = argon2.ArgonType.Argon2id;

  async checkQuestion(question: Question): Promise<Question> {
    if (!question.answer) return { ...question };

    const hashedAnswerText = await argon2.hash({
      pass: question.answer.toLocaleLowerCase(),
      salt: Argon2HashingAlgorithm.SALT,
      hashLen: Argon2HashingAlgorithm.HASH_LENGTH,
      type: Argon2HashingAlgorithm.TYPE,
    });

    const isCorrect = !!question.solutions.find(
      (solution) => solution === hashedAnswerText.hashHex
    );

    return { ...question, isCorrect };
  }

  checkQuestions(questions: Question[]): Promise<Question[]> {
    const questionsToCheck = questions.map(this.checkQuestion);

    return Promise.all(questionsToCheck);
  }

  async checkChallenge(challenge: Challenge): Promise<Challenge> {
    return challenge.merge({
      questions: await this.checkQuestions(challenge.questions),
    });
  }
}
