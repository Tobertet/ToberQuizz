import { Answer } from "./Answer";

export interface Question {
  solutions: string[];
  media?: string;
  answer?: Answer;
  isCorrect?: boolean;
}
