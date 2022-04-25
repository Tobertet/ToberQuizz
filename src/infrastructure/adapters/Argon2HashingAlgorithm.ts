import { HashingAlgorithm } from "@/application/ports";
import argon2 from "argon2-browser";

const SALT = "Tobertet";
const HASH_LENGTH = 32;
const TYPE = argon2.ArgonType.Argon2id;

const create: () => HashingAlgorithm = () => ({
  check: async (question) => {
    const hashedAnswerText = await argon2.hash({
      pass: question.answer.text.toLocaleLowerCase(),
      salt: SALT,
      hashLen: HASH_LENGTH,
      type: TYPE,
    });

    const isCorrect = !!question.solutions.find(
      (solution) => solution === hashedAnswerText.hashHex
    );

    return { ...question, answer: { ...question.answer, isCorrect } };
  },
});

export const Argon2HashingAlgorithm = {
  create,
};
