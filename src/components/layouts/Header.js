import React from 'react';
import { connect } from "react-redux";

const Header = (props) => {

    const renderContext = () => {
        switch (props.user) {
            case null:
                return <li><a href="/">Loading</a></li>
            case false:
                return <li><a href="/auth/google">Sign Up</a></li>
            default:
                return (
                    <React.Fragment>
                        <li><a href="/api/logout">Logout</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </React.Fragment>
                )
        }
    }

    return (
        <nav className="blue ligten-1">
            <div className="nav-wrapper">
                <div className="container">
                    <a href="/" className="brand-logo">Hello</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {renderContext()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth
});


export default connect(mapStateToProps)(Header);