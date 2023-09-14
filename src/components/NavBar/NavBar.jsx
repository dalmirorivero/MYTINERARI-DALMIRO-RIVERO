import React from 'react'
import Links from '../Links/Links'
import { useSelector } from 'react-redux';

const NavBar = ({ links }) => {
  const { isAuthenticated } = useSelector(store => store.authentication)
    return(
          <nav className="mx-2 pt-1">
            {
              links.map((link, index) =>{
                if(isAuthenticated && link.role.includes('logged')){
                return(
                  <Links key={index} value={link.value} active={link.active} content={link.content}/>
                )}
                else if(!isAuthenticated && link.role.includes('default')){
                  return(
                    <Links key={index} value={link.value} active={link.active} content={link.content}/>
                  )
                }
              })
            }
          </nav>
  )
};

export default NavBar;