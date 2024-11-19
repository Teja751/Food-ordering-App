import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">SB Food Ordering App</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/order">Order</a></li>

                
            </ul>
        </nav>
    );
};

export default Navbar;
