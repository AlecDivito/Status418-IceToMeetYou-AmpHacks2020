import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import IContext from '../models/IContext';
import GetLocation from '../data/location';
import GetStatistics from '../data/statistics';
import { QuestionIds } from '../data/questions';
import Card from '../components/Card';
import "../components/Question.css";
import "./FoundPage.css";
import Button from '../components/Button';
import ILocation from '../models/ILocation';

const FoundPage = () => {
    let router = useHistory();
    let location = useLocation<{ answers: IContext }>();

    let context: IContext = {};
    if (location.state?.answers) {
        context = location.state.answers;
    } else {
        router.push("/");
        return <div></div>
    }

    let locationId = context[QuestionIds.LOCATION_ID][0];
    let locations = GetLocation(locationId.id);
    let stats = [1, 2, 3].map(() => GetStatistics(context));

    const select = (location: ILocation) => {

    }

    return <section>
        <h1 className="title">Here's what we found for you:</h1>
        <div className="container">
            {(locations.map((l, i) =>
                <Card key={l.title} picture={l.picture} title={l.title} index={i + 1}>
                    {stats[i].map(s =>
                        <div key={s.title} className="statistic">
                            <h3 className="statistic__text">{s.title}</h3>
                            <p className="statistic__subtext">{s.statistic}</p>
                        </div>
                    )}
                    <button disabled={true} className="button" onClick={() => select(l)}>Checkout</button>
                </Card>
            ))}
        </div>
    </section>
}

export default FoundPage;