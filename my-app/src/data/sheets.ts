import { Sheet } from '@/types/sheet';

export const sheets: Sheet[] = [
    {
        id: '1',
        title: 'Für Elise',
        composer: 'Ludwig van Beethoven',
        difficulty: 'medium',
        instrument: 'Piano',
        imagePreview: '/sheets/sheet1.1.jpg',
        imagesData: {
            imageBase: 'sheet1',
            totalPages: 3,
        },
        overview: 'ква',
        description: 'Классическая пьеса для фортепиано. Идеальна для начинающих пианистов среднего уровня.',
    },
    {
        id: '2',
        title: 'Clair de Lune',
        composer: 'Claude Debussy',
        difficulty: 'hard',
        instrument: 'Piano',
        imagePreview: '/sheets/sheet2.1.jpg',
        imagesData: {
            imageBase: 'sheet2',
            totalPages: 6,
        },
        overview: 'не среда((',
        description: 'Нежная и атмосферная пьеса из Suite Bergamasque. Требует мастерства.',
    },
    {
        id: '3',
        title: 'Twinkle Twinkle Little Star',
        composer: 'Traditional',
        difficulty: 'easy',
        instrument: 'Guitar',
        imagePreview: '/sheets/sheet3.1.jpg',
        imagesData: {
            imageBase: 'sheet3',
            totalPages: 1,
        },
        overview: "it's friday my fellas. here. a gift friday frog",
        description: 'Простая детская мелодия, адаптированная для гитары. Отлично для новичков.',
    },
];
