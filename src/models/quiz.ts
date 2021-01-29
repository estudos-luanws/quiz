import { Question } from "./question"

export interface Quiz {
    bg: string
    title: string
    description: string
    questions: Question[]
    external: string[]
    theme: {
        colors: {
            primary: string
            secondary: string
            mainBg: string
            contrastText: string
            wrong: string
            success: string
        }
        borderRadius: string
    }
}