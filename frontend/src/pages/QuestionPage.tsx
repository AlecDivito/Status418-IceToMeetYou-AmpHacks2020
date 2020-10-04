import React, { useEffect, useState } from 'react';
import QuestionsData from '../data/questions';
import IAnswer from '../models/IAnswer';
import IContext from '../models/IContext';
import IQuestion from '../models/IQuestion';
import Questions from '../components/Question';
import { useHistory } from 'react-router-dom';

const QuestionPage = () => {
    let questions = QuestionsData;
    let router = useHistory();
    let [context, setContext] = useState<IContext>({});
    let [active, setActive] = useState<IQuestion>(questions[0]);

    useEffect(() => {
        if (Object.keys(context).length === questions.length) {
            router.push("location", { answers: context });
        }
    }, [context]);

    let updateQuestionnaire = (question: IQuestion, answers: IAnswer[]) => {
        let completedQuestion = { [question.id]: answers };
        setContext({ ...context, ...completedQuestion });
        setActive(questions[question.id + 1]);
    }

    return <Questions {...active} onSubmit={updateQuestionnaire} />;
}

export default QuestionPage;