import React from 'react';
import "./Header.css";
import Logo from './Logo';

const Header = () => {
    return <header className="header">
        <div className="logo">
            <Logo />
        </div>
        <h1 className="title">Igloo Connect</h1>
    </header>
}

export default Header;