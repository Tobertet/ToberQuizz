export enum CountryCodes {
  Spain = "ES",
  // WorldWide = "WW",
}

export type QuizzData = {
  [P in CountryCodes]: Challenge[];
};

export interface Challenge {
  description: string;
  questions: Question[];
  startingDate: string;
}

export interface Question {
  solutions: string[];
  altText?: string;
}

export interface CheckedAnswer {
  text: string;
  isValid: boolean;
}
