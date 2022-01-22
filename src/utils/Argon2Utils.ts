import { CheckedAnswer, Question } from "../models";
import argon2 from "argon2-browser";

export class Argon2Utils {
  private static readonly SALT = "Tobertet";
  private static readonly HASH_LENGTH = 32;
  private static readonly TYPE = argon2.ArgonType.Argon2id;

  static isAnswerValid: (
    answer: string,
    question: Question
  ) => Promise<boolean> = async (answer, question) => {
    const hashedAnswerText = await argon2.hash({
      pass: answer.toLocaleLowerCase(),
      salt: Argon2Utils.SALT,
      hashLen: Argon2Utils.HASH_LENGTH,
      type: Argon2Utils.TYPE,
    });
    return !!question.solutions.find(
      (solution) => solution === hashedAnswerText.hashHex
    );
  };

  static checkAnswer: (
    answer: string,
    question: Question
  ) => Promise<CheckedAnswer> = async (answer, question) => {
    return <CheckedAnswer>{
      text: answer,
      isValid: await Argon2Utils.isAnswerValid(answer, question),
    };
  };

  static checkAnswers: (
    answers: Array<string | undefined>,
    questions: Question[]
  ) => Promise<Array<CheckedAnswer | undefined>> = async (
    answers,
    questions
  ) => {
    const answersToCheck = <Promise<CheckedAnswer>[]>[];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i]) {
        answersToCheck[i] = Argon2Utils.checkAnswer(
          answers[i] as string,
          questions[i]
        );
      }
    }
    return await Promise.all(answersToCheck);
  };
}
