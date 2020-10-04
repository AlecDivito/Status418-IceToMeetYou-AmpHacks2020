import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import QuestionsData from './data/questions';
import IAnswer from './models/IAnswer';
import Questions from './pages/Question';
import "./App.css";
import IContext from './models/IContext';
import IQuestion from './models/IQuestion';

function App() {
    let questions = QuestionsData;
    let [context, setContext] = useState<IContext>({});
    let [active, setActive] = useState<IQuestion>(questions[0]);

    let updateQuestionnaire = (question: IQuestion, answers: IAnswer[]) => {
        let completedQuestion = { [question.id]: answers };
        setContext({ ...context, ...completedQuestion });
        setActive(questions[question.id + 1]);
    }

    return (
        <HashRouter>
            <Header />
            <main className="content">
                <Questions {...active} onSubmit={updateQuestionnaire} />
            </main>
        </HashRouter>
    );
}

export default App;
