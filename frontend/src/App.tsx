import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import "./App.css";
import QuestionPage from './pages/QuestionPage';
import FoundPage from './pages/FoundPage';

function App() {

    return (
        <HashRouter>
            <Header />
            <main className="content">
                {/* <Route path="/" component={QuestionPage} /> */}
                <Route path="/" component={FoundPage} />
            </main>
        </HashRouter>
    );
}

export default App;
