import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = (props) =>{
    const { value, content } = props
    return (
        <NavLink className={({ isActive }) => isActive ? "mx-2 text-black border-b-4 pr-2 pl-0 border-customOrange" : "mx-2 text-black hover:text-customOrange"} to={value}> 
            {content} 
        </NavLink>
    )
};

export default Links;