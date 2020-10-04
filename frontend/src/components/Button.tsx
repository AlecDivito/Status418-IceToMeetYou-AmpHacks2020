import React from 'react';
import "./Button.css";

interface IProps {
    onClick: () => void,
    children: any,
    disabled: boolean,
}

const Button = ({ onClick, disabled, children }: IProps) => {
    return <button disabled={disabled} className="btn" onClick={onClick}>{children}</button>
}

export default Button;