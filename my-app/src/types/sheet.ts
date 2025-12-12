export type Difficulty = "easy" | "medium" | "hard";

export interface Sheet {
  id: string;
  title: string;
  composer: string;
  difficulty: Difficulty;
  instrument: string;
  image: string;
  description: string;
}