import React, { useEffect, useState } from 'react';
import ComponentType from '../models/EComponentType';
import IAnswer from '../models/IAnswer';
import IQuestion from '../models/IQuestion';
import ButtonGroup from '../components/ButtonGroup';
import Query from '../components/Query';
import "./Question.css";

interface IProps extends IQuestion {
    onSubmit: (question: IQuestion, answers: IAnswer[]) => void;
}

const Question = (props: IProps) => {
    let [state, setState] = useState<number[]>([]);

    useEffect(() => {
        if (state.length >= props.max_answers) {
            let answers = props.answers.filter(a => state.includes(a.id));
            props.onSubmit(props, answers);
            setState([]);
        }
    }, [state])

    let completed = (id: number[]) => {
        setState([...id, ...state]);
    }

    let inputProp;

    if (props.custom_component) {
        switch (props.custom_component.type) {
            case ComponentType.Query:
                inputProp = <Query data={props.custom_component.data} onCompleted={completed} />
                break;
            case ComponentType.ButtonGroup:
                inputProp = <ButtonGroup
                    wanted={props.max_answers}
                    data={props.custom_component?.data}
                    answers={props.answers}
                    onCompleted={completed} />
                break;
        }
    }

    return <section>
        <h1 className="title">{props.question}</h1>
        {inputProp}
    </section>
}

export default Question;