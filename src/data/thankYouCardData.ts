import type { CardThankYou } from "@/types/CardThankYou";
import VueJsImage from '@/assets/images/thanks-to/vuejs.svg';
import RefactoringGuru from '@/assets/images/thanks-to/refactoring-guru.png'
export const thankYouCardData: CardThankYou[] = [
    {
        thanksTo: "Vue JS",
        imagePath: VueJsImage,
        url: "https://vuejs.org/"
    },
    {
        thanksTo: "Refactoring Guru",
        imagePath: RefactoringGuru,
        url: "https://refactoring.guru/"
    }
]