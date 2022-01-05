export interface Question {
  solutions: string[];
  imageUri: string;
}

export interface Answer {
  text: string;
  isValid: boolean;
}
