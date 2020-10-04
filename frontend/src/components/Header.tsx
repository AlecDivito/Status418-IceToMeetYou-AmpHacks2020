import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Header.css";
import Logo from './Logo';

const Header = () => {
    const router = useHistory();
    const route = () => {
        router.push("/reset");
    }

    return <header className="header">
        <Link to="/reset">
            <div className="logo">
                <Logo />
            </div>
        </Link>
        <h1 onClick={route} className="title">Igloo Connect</h1>
    </header>
}

export default Header;