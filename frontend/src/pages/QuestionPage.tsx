import React, { useState } from 'react';
import QuestionsData from '../data/questions';
import IAnswer from '../models/IAnswer';
import IContext from '../models/IContext';
import IQuestion from '../models/IQuestion';
import Questions from '../components/Question';

const QuestionPage = () => {
    let questions = QuestionsData;
    let [context, setContext] = useState<IContext>({});
    let [active, setActive] = useState<IQuestion>(questions[0]);

    let updateQuestionnaire = (question: IQuestion, answers: IAnswer[]) => {
        let completedQuestion = { [question.id]: answers };
        setContext({ ...context, ...completedQuestion });
        setActive(questions[question.id + 1]);
    }

    return <Questions {...active} onSubmit={updateQuestionnaire} />;
}

export default QuestionPage;