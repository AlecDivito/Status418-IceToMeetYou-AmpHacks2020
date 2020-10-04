import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import "./App.css";
import QuestionPage from './pages/QuestionPage';
import FoundPage from './pages/FoundPage';

function App() {

    return (
        <BrowserRouter basename="/Status418-IceToMeetYou-AmpHacks2020/">
            <Header />
            <main className="content">
                <Route exact path="/" component={QuestionPage} />
                <Route path="/location" component={FoundPage} />
                <Route path="/reset">
                    <Redirect to="/" />
                </Route>
            </main>
        </BrowserRouter>
    );
}

export default App;
