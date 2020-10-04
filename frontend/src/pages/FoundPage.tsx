import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import IContext from '../models/IContext';
import GetLocation from '../data/location';
import GetStatistics from '../data/statistics';
import { QuestionIds } from '../data/questions';
import Card from '../components/Card';
import "../components/Question.css";

let temp = { "answers": { "0": [{ "id": 0, "answer": "English" }], "1": [{ "id": 7, "value": "SK", "answer": "Saskatchewan" }], "2": [{ "id": 0, "answer": "Arabs" }, { "id": 2, "answer": "Korean" }, { "id": 10, "answer": "Anyone :)" }], "3": [{ "id": 0, "answer": "Schools" }, { "id": 2, "answer": "Restaurants/Bars" }, { "id": 5, "answer": "Market/Café" }], "4": [{ "id": 0, "answer": "Yes" }], "5": [{ "id": 0, "answer": "Fluently" }], "6": [{ "id": 1, "answer": "Architecture and Construction" }, { "id": 3, "answer": "Health Science" }, { "id": 5, "answer": "Marketing, Sales and Services" }] } }

const FoundPage = () => {
    let router = useHistory();
    let location = useLocation<{ answers: IContext }>();

    let context: IContext = {};
    if (location.state?.answers) {
        context = location.state.answers;
    } else {
        context = temp.answers;
        // router.push("/");
    }

    let locationId = context[QuestionIds.LOCATION_ID][0];
    let locations = GetLocation(locationId.id);
    console.log(locations);
    let stats = [1, 2, 3].map(() => GetStatistics(context));

    return <section>
        <h1 className="title">Here's what we found for you:</h1>
        <div className="container">
            {(locations.map((l, i) =>
                <Card key={l.title} picture={l.picture} title={l.title} index={i}>
                    {stats[i].map(s =>
                        <div key={s.title} className="statistic">
                            <h3 className="statistic__text">{s.title}</h3>
                            <p className="statistic__subtext">{s.statistic}</p>
                        </div>
                    )}
                </Card>
            ))}
        </div>
    </section>
}

export default FoundPage;