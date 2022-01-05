import { Question } from "./models";
import argon2 from "argon2-browser";

export class Argon2Utils {
  static isAnswerValid = async (
    answerText: string,
    question: Question
  ): Promise<boolean> => {
    const hashedAnswerText = await argon2.hash({
      pass: answerText.toLocaleLowerCase(),
      salt: "Tobertet",
      hashLen: 32,
      type: argon2.ArgonType.Argon2id,
    });
    return !!question.solutions.find(
      (solution) => solution === hashedAnswerText.hashHex
    );
  };
}
