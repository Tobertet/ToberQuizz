import { CheckedQuestion, UncheckedQuestion } from "@/domain";

export type HashingAlgorithm = {
  checkQuestion: (question: UncheckedQuestion) => Promise<CheckedQuestion>;
};
