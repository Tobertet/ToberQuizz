import { HashingAlgorithm } from "@/application/ports";
import {
  AnsweredQuestion,
  Challenge,
  CheckedQuestion,
  isAnsweredQuestion,
  Question,
  UnansweredQuestion,
} from "@/domain";
import argon2 from "argon2-browser";

export class Argon2HashingAlgorithm implements HashingAlgorithm {
  private static readonly SALT = "Tobertet";
  private static readonly HASH_LENGTH = 32;
  private static readonly TYPE = argon2.ArgonType.Argon2id;

  async checkQuestion(
    question: AnsweredQuestion
  ): Promise<CheckedQuestion | UnansweredQuestion> {
    if (!question.answer) return { ...question };

    const hashedAnswerText = await argon2.hash({
      pass: question.answer.text.toLocaleLowerCase(),
      salt: Argon2HashingAlgorithm.SALT,
      hashLen: Argon2HashingAlgorithm.HASH_LENGTH,
      type: Argon2HashingAlgorithm.TYPE,
    });

    const isCorrect = !!question.solutions.find(
      (solution) => solution === hashedAnswerText.hashHex
    );

    return { ...question, answer: { isCorrect, text: question.answer.text } };
  }

  checkQuestions(questions: Question[]): Promise<Question[]> {
    const questionsToCheck = questions
      .filter(isAnsweredQuestion)
      .map(this.checkQuestion);

    return Promise.all(questionsToCheck);
  }

  //TODO esto tiene que llamar a un método del dominio
  async checkChallenge(challenge: Challenge): Promise<Challenge> {
    return challenge.merge({
      questions: await this.checkQuestions(challenge.questions),
    });
  }
}
