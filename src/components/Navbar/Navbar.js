import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.png";
const list = [
    {name: 'Home', path: '/'},
    {name: 'Users', path: '/users'},
    {name: 'Contact', path: '/contact'}
];

const Navbar = () => {
    const menu = list.map( (elem) => (<li className="nav__item" key={elem.name}> <NavLink exact={elem.path === '/'} className="nav__link" to={elem.path}>{elem.name}</NavLink></li>) )
    return (
        <header className="sidebar">
            <a href="" className="sidebar__logo"><img src={Logo} alt="brak zdjecia"/></a>
            <nav className="sidebar__nav">
                <ul className="nav__list">
                    {menu}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;