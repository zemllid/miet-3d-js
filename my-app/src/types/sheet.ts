export interface Sheet {
  id: string;
  title: string;
  composer: string;
  difficulty: "easy" | "medium" | "hard";
  instrument: string;
  image: string;
  description: string;
}