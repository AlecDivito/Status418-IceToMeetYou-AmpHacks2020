import React from 'react';
import "./Card.css";

interface IProps {
    id: number,
    pic: string,
    title: string,
    children: any
}

const Card = (props: IProps) => {

    return <div className="card">
        <div className="card__number">{props.id}</div>
        <img src={props.pic} alt="map of picture" />
        <div className="card__content">
            <h2 className="card__title">{props.title}</h2>
            {props.children}
        </div>
    </div>
}

export default Card;