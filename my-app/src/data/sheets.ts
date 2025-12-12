import { Sheet } from "@/types/sheet";

export const sheets: Sheet[] = [
  {
    id: "1",
    title: "Für Elise",
    composer: "Ludwig van Beethoven",
    difficulty: "medium",
    instrument: "Piano",
    image: "/images/sheet1.jpg",
    description: "Классическая пьеса для фортепиано. Идеальна для начинающих пианистов среднего уровня.",
  },
  {
    id: "2",
    title: "Clair de Lune",
    composer: "Claude Debussy",
    difficulty: "hard",
    instrument: "Piano",
    image: "/images/sheet2.jpg",
    description: "Нежная и атмосферная пьеса из Suite Bergamasque. Требует мастерства.",
  },
  {
    id: "3",
    title: "Twinkle Twinkle Little Star",
    composer: "Traditional",
    difficulty: "easy",
    instrument: "Guitar",
    image: "/images/sheet3.jpg",
    description: "Простая детская мелодия, адаптированная для гитары. Отлично для новичков.",
  },
];