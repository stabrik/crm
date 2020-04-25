import React from "react";
import {NavLink} from "react-router-dom";
import './_navbar.scss';

const list = [
    {name: 'Start', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'User', path: '/user'}
];

const Navbar = () => {
    const menu = list.map( (elem) => (<li className="list__item" key={elem.name}> <NavLink exact={elem.path === '/'} className="item__link" to={elem.path}>{elem.name}</NavLink></li>) )
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {menu}
            </ul>
        </nav>
    )
}

export default Navbar;