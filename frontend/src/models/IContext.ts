import IAnswer from "./IAnswer";
import IPick from "./IPick";

type IContext = {
    [question_id: number]: IAnswer[],
}

export default IContext;