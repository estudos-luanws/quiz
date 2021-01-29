import { Question } from "./question"
import { Theme } from "./theme";

export interface Quiz {
    bg: string
    title: string
    description: string
    questions: Question[]
    external: string[]
    theme: Theme
}