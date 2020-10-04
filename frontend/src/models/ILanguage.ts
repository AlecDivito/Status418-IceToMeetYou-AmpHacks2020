import Questions from "../data/questions";


export enum LanguageType {
    English = "English",
    // German = "German",
    // Arab = "Arabic",
    // Russian = "Russian",
}

type Question = string;

export type ILanguage = {
    [key in LanguageType]: {
        [question_id: number]: Question
    }
};
