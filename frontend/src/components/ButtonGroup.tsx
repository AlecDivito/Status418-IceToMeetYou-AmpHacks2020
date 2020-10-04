import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import CheckMark from '../components/Checkmark';
import IAnswer from '../models/IAnswer';
import "./ButtonGroup.css"

interface Data {
    size: string,
}

interface IProps {
    wanted: number,
    answers: IAnswer[],
    data?: Data,
    onCompleted: (id: number[]) => void;
}

const ButtonGroup = (props: IProps) => {
    let [state, setState] = useState<number[]>([]);

    let onClick = (id: number) => {
        if (state.includes(id)) {
            setState(state.filter(i => i !== id))
        } else {
            if (state.length === props.wanted) {
                let newState = state.filter((a, i) => i !== state.length - 1)
                setState([id, ...newState])
            } else {
                setState([id, ...state]);
            }
        }
    }

    let onSubmit = () => {
        if (state.length >= 1 && state.length <= props.wanted) {
            props.onCompleted(state);
            setState([]);
        }
    }

    useEffect(() => {
        if (props.wanted === 1) {
            onSubmit();
        }
    }, [state])

    let buttonSize = (props.data !== undefined) ? props.data.size : "regular";

    return <div className="full">
        <ul className={buttonSize}>
            {props.answers.map(a =>
                <li key={a.id}
                    className={(state.includes(a.id) ? "item active" : "item")}
                    onClick={() => onClick(a.id)}>
                    {(state.includes(a.id) ? <CheckMark /> : <span />)}
                    {a.answer}
                </li>
            )}
        </ul>
        <div className="full full--margin">
            {(props.wanted > 1 && state.length >= 1) ? <Button disabled={false} onClick={onSubmit}>Next</Button> : null}
        </div>
    </div>
}

export default ButtonGroup;