import React from 'react';

const Header = () => {
    return (
        <nav className="blue ligten-1">
            <div className="nav-wrapper">
                <div className="container">
                    <a href="/" className="brand-logo">Hello</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/auth/google">Sign Up</a></li>
                        <li><a href="/api/logout">Logout</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;