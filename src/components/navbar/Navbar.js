import React, { useState } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems";
import './navbar.css';

export const Navbar = () => {

    const [clicked, clickedState] = useState(false);

    const handleClick = ()=> {
        clickedState(!clicked)
        console.log(clicked)
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={ clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={ clicked ? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map( (item, index)=> {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>{item.title}</a>
                            </li>
                        )
                    } )
                }
            </ul>
            <Button>Sign Up</Button>
        </nav>
    )
}
