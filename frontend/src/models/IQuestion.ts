import ComponentType from "./EComponentType";
import IAnswer from "./IAnswer";


export default interface IQuestion {
    id: number,
    question: string,
    max_answers: number,
    answers: IAnswer[],
    custom_component?: {
        type: ComponentType,
        data?: any,
    }
}
