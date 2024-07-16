import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-tag">
            <div className="logo-container">
                <img src={`${process.env.PUBLIC_URL}/logo.jfif`} className="logo" alt="" />
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}
