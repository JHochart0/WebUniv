import React from 'react'
import { NavLink as RRNavLink } from "react-router-dom";

// This component is used to create navigation links
function NavLink(props) {
    const to = props.to;
    const content = props.content;
    const id = props.id;
    const onClick = props.onClick;

    return (
        <RRNavLink
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            id={id}
            to={to}
            onClick={onClick}
        >
            {props.children}{content}
        </RRNavLink>
    );
}

export default NavLink;