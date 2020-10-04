import React from 'react';
import "./Card.css";

interface IProps {
    index: number,
    picture: string,
    title: string,
    children: any
}

const Card = (props: IProps) => (
    <div className="card">
        <div className="card__number">
            <span className="card__number--text">
                {props.index}
            </span>
        </div>
        <img className="card__picture" src={props.picture} alt="map of picture" />
        <div className="card__content">
            <h2 className="card__title">{props.title}</h2>
            {props.children}
        </div>
    </div>
)

export default Card;