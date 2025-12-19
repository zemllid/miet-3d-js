export type Difficulty = "easy" | "medium" | "hard";

export interface Sheet {
  id: string;
  title: string;
  composer: string;
  difficulty: Difficulty;
  instrument: string;
  image: string;
  imageBase: string; //"sheet1" для sheet1.1.jpg, sheet1.2.jpg и т.д.
  totalPages: number;
  overview: string;
  description: string;
}