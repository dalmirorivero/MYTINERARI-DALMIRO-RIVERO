import React from 'react'
import Links from '../Links/Links'

const NavBar = ({ links }) => {
    return(
          <nav className="mx-2 pt-1">
            {
              links.map((link, index) =>{
                return(
                  <Links key={index} value={link.value} active={link.active} content={link.content}/>
                )
              })
            }
          </nav>
  )
};

export default NavBar;